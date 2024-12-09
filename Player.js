import Projectile from "./projectile.js";
import {
  PATH_SPACESHIP_IMAGE,
  PATH_ENGINE_IMAGE,
  PATH_ENGINE_SPRITE,
  INITIAL_FRAMES,
} from "./utils/constants.js";

class Player {
  constructor() {
    this.width = 48 * 2;
    this.height = 48 * 2;
    this.velocity = 6;

    this.position = {
      x: canvas.width / 2 - this.width / 2,
      y: canvas.height - this.height - 30,
    };

    this.image = this.getImage(PATH_SPACESHIP_IMAGE);
    this.engineImage = this.getImage(PATH_ENGINE_IMAGE);
    this.engineSprites = this.getImage(PATH_ENGINE_SPRITE);

    this.sx = 0;
    this.framesCounter = INITIAL_FRAMES;
  }

  getImage(path) {
    const image = new Image();
    image.src = path;
    return image;
  }

  moveLeft() {
    this.position.x -= this.velocity;
  }

  moveRight() {
    this.position.x += this.velocity;
  }

  draw(ctx) {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    ctx.drawImage(
      this.engineSprites,
      this.sx,
      0,
      48,
      48,
      this.position.x,
      this.position.y + 8,
      this.width,
      this.height
    );

    ctx.drawImage(
      this.engineImage,
      this.position.x,
      this.position.y + 8,
      this.width,
      this.height
    );

    this.update();
  }

  update() {
    if (this.framesCounter === 0) {
      this.sx = this.sx === 96 ? (this.sx = 0) : (this.sx += 48);
      this.framesCounter = INITIAL_FRAMES;
    }

    this.framesCounter--;
  }

  shoot(projectiles) {
    const p = new Projectile({ 
        x: this.position.x + this.width / 2 - 1,
        y: this.position.y + this.height / 2 - 46
    }, 150)

    projectiles.push(p)
  }
}

export default Player;
