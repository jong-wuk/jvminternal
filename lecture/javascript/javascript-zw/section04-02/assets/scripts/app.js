const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt("당신과 몬스터의 최대 체력 수치를 입력해 주세요.", '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];
let lastLoggedEntry;
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth

            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth

            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
        default:
            logEntry = {};
    }
    battleLog.push(logEntry);
    /* if (ev === LOG_EVENT_PLAYER_ATTACK) {
         logEntry.target = "MONSTER";
         logEntry = {
             event: ev,
             value: val,
             target: 'MONSTER',
             finalMonsterHealth: monsterHealth,
             finalPlayerHealth: playerHealth

         };

     } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
         logEntry = {
             event: ev,
             value: val,
             target: 'MONSTER',
             finalMonsterHealth: monsterHealth,
             finalPlayerHealth: playerHealth

         };
     } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
         logEntry = {
             event: ev,
             value: val,
             target: 'PLAYER',
             finalMonsterHealth: monsterHealth,
             finalPlayerHealth: playerHealth
         };
     } else if (ev === LOG_EVENT_PLAYER_HEAL) {
         logEntry = {
             event: ev,
             value: val,
             finalMonsterHealth: monsterHealth,
             finalPlayerHealth: playerHealth

         };
     } else if (ev === LOG_EVENT_GAME_OVER) {
         logEntry = {
             event: ev,
             value: val,
             target: 'MONSTER',
             finalMonsterHealth: monsterHealth,
             finalPlayerHealth: playerHealth
         };
     }*/
}

function attackMonster(mode) {
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    /* if (mode === MODE_ATTACK) {
         maxDamage = ATTACK_VALUE;
         logEvent = LOG_EVENT_PLAYER_ATTACK;
     } else if (mode === MODE_STRONG) {
         maxDamage = STRONG_ATTACK_VALUE;
         logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
     }*/

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
    if (currentPlayerHealth <= 0 && hasBonusLife === true) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert("보너스 생명을 이용해 부활 했습니다.!")
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("몬스터를 물리쳤습니다.!!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("플레이어가 졌습니다!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("비겼습니다..!!");
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        )
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("체력이 꽉 잤습니다.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG);
}

healBtn.addEventListener('click', healPlayerHandler);
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

function printLogHandler() {
    /*for (let loop = 0; loop < battleLog.length; loop++) {
        console.log(battleLog[loop]);
    }*/
    let j = 3;
    do {
        console.log("=================");
        j++;
    } while (j < 3);


    let i = 0;
    for (const logEntry of battleLog) {
        if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < i) {
            console.log(`#${i}`);
            for (const key in logEntry) {
                console.log(`${key} => ${logEntry[key]}`);
            }
            lastLoggedEntry = i;
            break;
        }
        i++;
    }
}

logBtn.addEventListener('click', printLogHandler);

//https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression expression vs statement