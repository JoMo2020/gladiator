"use strict";

var player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

var PlayerMoves = {
  calcAttack: function calcAttack() {
    // Who attacks first?
    var getPlayerSpeed = player.speed;
    var getEnemySpeed = enemy.speed; // Player attacks!

    var playerAttack = function playerAttack() {
      // Who attacks first?
      var calcBaseDamage;

      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }

      var offsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcOutputDamage = calcBaseDamage + offsetDamage; // NumberOfHits

      var numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      var attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }; // Enemy attacks!


    var enemyAttack = function enemyAttack() {
      var calcBaseDamage;

      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }

      var offsetDamage = Math.floor(Math.random() * Math.floor(10));
      var calcOutputDamage = calcBaseDamage + offsetDamage; // NumberOfHits

      var numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      var attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }; // Get player/enemy health to change later!


    var getPlayerHealth = document.querySelector(".health-player");
    var getEnemyHealth = document.querySelector(".health-enemy"); // Initiate attacks!

    if (getPlayerSpeed >= getEnemySpeed) {
      var playerAttackValues = playerAttack();
      var totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

      if (enemy.health <= 0) {
        alert("You win! Refresh browser to paly again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health; // Enemy attacks

        var enemyAttackValues = enemyAttack();

        var _totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

        player.health = player.health - _totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

        if (player.health <= 0) {
          alert("You loose! Refresh browser to paly again.");
          getPlayerHealth.innerHTML = 'Health:0';
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      var _enemyAttackValues = enemyAttack();

      var _totalDamage2 = _enemyAttackValues[0] * _enemyAttackValues[1];

      player.health = player.health - _totalDamage2;
      alert("Enemy hit " + _enemyAttackValues[0] + " damage " + _enemyAttackValues[1] + " times.");

      if (player.health <= 0) {
        alert("You loose! Refresh browser to paly again.");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health; // Player attacks

        var _playerAttackValues = playerAttack();

        var _totalDamage3 = _enemyAttackValues[0] * _enemyAttackValues[1];

        enemy.health = enemy.health - _totalDamage3;
        alert("You hit " + _playerAttackValues[0] + " damage " + _playerAttackValues[1] + " times.");

        if (enemy.health <= 0) {
          alert("You win! Refresh browser to paly again.");
          getEnemyHealth.innerHTML = 'Health:0';
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }
};