const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("몬스터를 물리쳤습니다.!!")
        resetGame(adjustHealthBars(chosenMaxLife));
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("플레이어가 졌습니다!");
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("비겼습니다..!!");
    }
}

attackBtn.addEventListener('click', attackHandler);
