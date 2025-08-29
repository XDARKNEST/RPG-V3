class NPC {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.hp = 100;
    this.state = "idle"; // idle, walk, attack
  }

  update(player) {
    let dist = Math.hypot(this.x - player.x, this.y - player.y);

    if (dist < 80) {
      this.state = "attack";
      this.attack(player);
    } else if (Math.random() < 0.01) {
      this.state = "walk";
      this.x += (Math.random() - 0.5) * 10;
      this.y += (Math.random() - 0.5) * 10;
    } else {
      this.state = "idle";
    }
  }

  attack(player) {
    player.hp -= 1;
    if (player.hp < 0) player.hp = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, 20, 20);
    ctx.fillStyle = "white";
    ctx.fillText(this.name, this.x, this.y - 5);
  }
}
