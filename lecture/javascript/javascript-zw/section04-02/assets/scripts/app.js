const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
    let maxDamage;
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("몬스터를 물리쳤습니다.!!")
        resetGame(adjustHealthBars(chosenMaxLife));
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("플레이어가 졌습니다!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("비겼습니다..!!");
    }
}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("체력이 꽉 잤습니다.");
        healValue = chosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
}

healBtn.addEventListener('click', healPlayerHandler);
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);