const Game = {
  canvas: null,
  ctx: null,
  player: {
    x: 100,
    y: 100,
    hp: 100,
    maxHp: 100,
    gold: 0,
    inventory: []
  },
  npcs: [],
  keys: {},
  init() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 480;
    this.canvas.height = window.innerHeight;

    // Spawn NPC awal
    this.npcs.push(new NPC("Guard", 200, 200));
    this.npcs.push(new NPC("Merchant", 150, 300));

    // Input
    window.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        let code = prompt("Masukkan kode cheat:");
        Cheat.enable(code);
      }
      this.keys[e.key] = true;
    });

    window.addEventListener("keyup", e => {
      this.keys[e.key] = false;
    });

    this.loop();
  },

  loop() {
    requestAnimationFrame(() => this.loop());
    this.update();
    this.render();
  },

  update() {
    // Gerakan player
    if (this.keys["ArrowUp"]) this.player.y -= 2;
    if (this.keys["ArrowDown"]) this.player.y += 2;
    if (this.keys["ArrowLeft"]) this.player.x -= 2;
    if (this.keys["ArrowRight"]) this.player.x += 2;

    // Update NPC
    this.npcs.forEach(n => n.update(this.player));
  },

  render() {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    // Draw player
    this.ctx.fillStyle = "cyan";
    this.ctx.fillRect(this.player.x, this.player.y, 20, 20);

    // Draw NPC
    this.npcs.forEach(n => n.draw(this.ctx));

    // HUD
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`HP: ${this.player.hp}`, 10, 20);
    this.ctx.fillText(`Gold: ${this.player.gold}`, 10, 40);
  }
};

window.onload = () => Game.init();
