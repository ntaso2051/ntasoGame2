// pixi.jsのアプリケーションを作成
const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialiasing: true,
  transparent: false,
  resolution: 1,
});

let gameScene;
let dungeon;
let animation;

// bodyにpixi.jsのview(ステージ)を追加する
document.body.querySelector("#game").appendChild(app.view);

PIXI.Loader.shared
  .add("chara-1", "./img/player1.png")
  .add("chara-2", "./img/player2.png")
  .add("chara-3", "./img/player3.png")
  .add("explorer", "https://i.imgur.com/rWus6RK.png")
  .add("cat", "https://i.imgur.com/Fk2JkI5.png")
  .add("dungeon", "https://i.imgur.com/EzpxVBZ.png")
  .load(gameInitialize);

function gameInitialize() {
  gameScene = new PIXI.Container();
  app.stage.addChild(gameScene);

  dungeon = new PIXI.Sprite(PIXI.utils.TextureCache["dungeon"]);
  gameScene.addChild(dungeon);

  animation = createAnimation(["chara-1", "chara-2", "chara-3"]);
  console.log(animation);
  animation.x = gameScene.width / 2 - animation.width;
  animation.t = gameScene.width / 2 - animation.height / 2;
  animation.vx = 0;
  animation.vy = 0;
  animation.play();
  gameScene.addChild(animation);
}

function createAnimation(imgs, opts) {
  const textureArray = [];
  for (let i = 0; i < imgs.length; i++) {
    let texture = PIXI.Texture.from(imgs[i]);
    textureArray.push(texture);
  }
  const animatedSprite = new PIXI.AnimatedSprite(textureArray);
  animatedSprite.animationSpeed =
    opts && opts.animationSpeed ? opts.animationSpeed : 0.1;
  return animatedSprite;
}

function play(e) {
  animation.play();
}

const square = new PIXI.Graphics();
square.width = 100;
square.height = 100;
square.x = 50;
square.y = 50;

keyFlag = 0;
playerSpeed = 2;

square.beginFill(0xff00ff);
square.drawRect(0, 0, 100, 100);
square.endFill();

app.stage.addChild(square);

app.ticker.add((delta) => this.gameloop(delta, square));

window.addEventListener(
  "keydown",
  (event) => {
    this.downHandler(event);
  },
  false
);
window.addEventListener(
  "keyup",
  (event) => {
    this.upHandler(event);
  },
  false
);

function downHandler(event) {
  switch (event.key) {
    case "ArrowRight":
      keyFlag = 1;
      break;
    case "ArrowLeft":
      keyFlag = 2;
      break;
    case "ArrowDown":
      keyFlag = 3;
      break;
    case "ArrowUp":
      keyFlag = 4;
      console.log(keyFlag);
      break;
  }
}

function upHandler(event) {
  keyFlag = 0;
}

gameInitialize();

function gameloop(delta, square) {
  switch (keyFlag) {
    case 1:
      square.x += playerSpeed;
      break;
    case 2:
      square.x -= playerSpeed;
      break;
    case 3:
      square.y += playerSpeed;
      break;
    case 4:
      square.y -= playerSpeed;
      break;
    default:
      break;
  }
}
