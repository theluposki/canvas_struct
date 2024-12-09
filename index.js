import Player from "./Player.js";
import { keys, registerControllers } from "./controller.js";
import Projectile from "./projectile.js";
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.imageSmoothingEnable = false;

const player = new Player(canvas.width, canvas.height);

const playerProjectiles = [];

const drawProjectiles = () => {
  playerProjectiles.forEach((projectiles) => {
    projectiles.draw(ctx);
    projectiles.update();
  });
};

const clearProjectiles = () => {
  playerProjectiles.forEach((projectiles, index) => {
    if (projectiles.position.y <= 0) {
      playerProjectiles.splice(index, 1);
    }
  });
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawProjectiles();
  clearProjectiles();
  ctx.save();

  ctx.translate(
    player.position.x + player.width / 2,
    player.position.y + player.height / 2
  );

  if (keys.shoot.pressed && keys.shoot.releassed) {
    player.shoot(playerProjectiles);
    keys.shoot.releassed = false;
  }

  if (keys.left && player.position.x > 0) {
    player.moveLeft();
    ctx.rotate(-0.15);
  }
  if (keys.right && player.position.x <= canvas.width - player.width) {
    player.moveRight();
    ctx.rotate(0.15);
  }

  ctx.translate(
    -player.position.x - player.width / 2,
    -player.position.y - player.height / 2
  );

  player.draw(ctx);
  ctx.restore();

  requestAnimationFrame(gameLoop);
};

registerControllers();
gameLoop();
