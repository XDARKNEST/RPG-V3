const Cheat = {
  active: false,

  enable(code) {
    if (code === "DRAKS@1122") {
      document.getElementById("cheat-menu").style.display = "block";
      this.active = true;
      alert("Cheat Mode Activated!");
    } else {
      alert("Kode salah!");
    }
  },

  giveGold(amount) {
    Game.player.gold += amount;
  },

  heal() {
    Game.player.hp = Game.player.maxHp;
  },

  unlockAll() {
    Game.player.inventory.push("Legendary Sword", "Epic Armor", "Magic Potion");
  },

  spawnNPC() {
    Game.npcs.push(new NPC("CheatNPC", Math.random() * 200, Math.random() * 200));
  }
};
