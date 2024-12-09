const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnCenter = document.querySelector(".center");

export const keys = {
  left: false,
  right: false,
  shoot: {
    pressed: false,
    releassed: true,
  },
};

export const registerControllers = () => {
  // Teclado
  addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "arrowleft") keys.left = true;
    if (key === "arrowright") keys.right = true;
    if (key === "a") keys.shoot.pressed = true;
  });

  addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();

    if (key === "arrowleft") keys.left = false;
    if (key === "arrowright") keys.right = false;
    if (key === "a") {
      keys.shoot.pressed = false;
      keys.shoot.releassed = true;
    }
  });

  // Para Mouse
  // Mouse Down
  btnLeft.addEventListener("mousedown", () => (keys.left = true));
  btnRight.addEventListener("mousedown", () => (keys.right = true));
  btnCenter.addEventListener("mousedown", () => {
    keys.shoot.pressed = false;
    keys.shoot.releassed = true;
  });
  // Mouse UP
  btnLeft.addEventListener("mouseup", () => (keys.left = false));
  btnRight.addEventListener("mouseup", () => (keys.right = false));
  btnCenter.addEventListener("mouseup", () => (keys.shoot.pressed = true));

  // Para dispositivos moveis.
  // Touch Start
  btnLeft.addEventListener("touchstart", () => (keys.left = true));
  btnRight.addEventListener("touchstart", () => (keys.right = true));
  btnCenter.addEventListener("touchstart", () => (keys.shoot.pressed = true));
  // Touch End
  btnLeft.addEventListener("touchend", () => (keys.left = false));
  btnRight.addEventListener("touchend", () => (keys.right = false));
  btnCenter.addEventListener("touchend", () => {
    keys.shoot.pressed = false;
    keys.shoot.releassed = true;
  });
};
