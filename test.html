const pixiApp = new PIXI.Application({
    width: 512,
    height: 512,
    antialiasing: true,
    transparent: false,
    resolution: 1,
});

let gameScene;
let dungeon;
let anim1;
let anim2 = [];
let isClear = false;
let clearScene;

document.querySelector("#game").appendChild(pixiApp.view);

PIXI.Loader.shared
    .add("chara-1", "./img/player1.png")
    .add("chara-2", "./img/player2.png")
    .add("chara-3", "./img/player3.png")
    .add("enemy-1", "./img/enemy1.png")
    .add("enemy-2", "./img/enemy2.png")
    .add("enemy-3", "./img/enemy3.png")
    .add("dungeon", "./img/dungeon.png")
    .add("clear", "./img/clear.png")
    .load(setup);

function setup(loader, res) {
    gameScene = new PIXI.Container();
    pixiApp.stage.addChild(gameScene);

    dungeon = new PIXI.Sprite(PIXI.utils.TextureCache["dungeon"]);
    clearScene = new PIXI.Sprite(PIXI.utils.TextureCache["clear"]);
    gameScene.addChild(dungeon);
    anim1 = createAnim(["chara-1", "chara-2", "chara-3"]);
    for (let i = 0; i < 8; i++) {
        anim2[i] = createAnim(["enemy-1", "enemy-2", "enemy-3"]);
        anim2[i].x = getRandomPos();
        anim2[i].y = getRandomPos();
        //console.log(anim2[i].x);
        //console.log(anim2);
        anim2[i].vx = 0;
        anim2[i].vy = 0;
        anim2[i].play();
        gameScene.addChild(anim2[i]);
    }
    anim1.x = gameScene.width / 2 - anim1.width;
    anim1.y = gameScene.height / 2 - anim1.height / 2;

    anim1.vx = 0;
    anim1.vy = 0;

    anim1.play();
    gameScene.addChild(anim1);
    gameScene.addChild(clearScene);
    clearScene.visible=false;
}

//pixiApp.ticker.add((delta) => this.gameloop(delta, anim1));
//pixiApp.ticker.add((delta) => this.gameloop(delta, anim2));
//pixiApp.ticker.add((delta) => this.enemyVanish(delta, anim2));

function createAnim(imgs, opts) {
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

function getRandomPos() {
    let pos = Math.floor(Math.random() * (450 - 32 + 1)) + 32;
    return pos;
}

function getRandomSpeed() {
    let speed = Math.floor(Math.random() * (5));
    return speed;
}

function enemyMoving() {
    for (let i = 0; i < 8; i++) {
        let tmposx = anim2[i].x;
        let tmposy = anim2[i].y;
        if (Math.floor(Math.random() * 10) % 2) {
            anim2[i].x -= getRandomSpeed();
        } else {
            anim2[i].x += getRandomSpeed();
        }
        if (Math.floor(Math.random() * 15) % 2) {
            anim2[i].y += getRandomSpeed();
        } else {
            anim2[i].y -= getRandomSpeed();
        }
        if (anim2[i].x < 32 || anim2[i].x > 480 || anim2[i].y < 32 || anim2[i].y > 480) {
            anim2[i].x = tmposx;
            anim2[i].y = tmposy;
        }
    }
}

function enemyVanish() {
    for (let i = 0; i < 8; i++) {
        if (anim1.x + 32 > anim2[i].x && anim1.x - 32 < anim2[i].x
            && anim1.y + 32 > anim2[i].y && anim1.y - 32 < anim2[i].y) {
            anim2[i].visible=false;
            console.log("player kills enemy" + i);
        }
    }
}

function clear(e) {
    let ok = true;
    for (let i = 0; i < 8; i++) {
        if (anim2[i].visible == true) {
            ok = false;
        }
    }
    if (ok) {
        isClear = true;
    }
}

let keyFlag = 0;
let playerSpeed = 2;
let count = 0;

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
    //console.log(event.key);
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
            //console.log(keyFlag);
            //console.log("pressed arrouUpKey")
            break;
        case " ":
            keyFlag = 5;
            //console.log("press space key");
            break;
    }
}

function upHandler(event) {
    keyFlag = 0;
}

function gameloop(delta, anim1, anim2) {
    //console.log(anim1.x+ "," + anim1.y);
    switch (keyFlag) {
        case 1:
            anim1.x += playerSpeed;
            if (count % 15 == 0) {
                enemyMoving();
            }
            break;
        case 2:
            anim1.x -= playerSpeed;
            if (count % 15 == 0) {
                enemyMoving();
            }
            break;
        case 3:
            anim1.y += playerSpeed;
            if (count % 15 == 0) {
                enemyMoving();
            }
            break;
        case 4:
            anim1.y -= playerSpeed;
            if (count % 15 == 0) {
                enemyMoving();
            }
            break;
        case 5:
            enemyVanish();
            console.log("press spacekey");
            clear();

            break;
        default:
            break;
    }

    if (isClear) {
        console.log("Clear !!");
        isClear=false;
        clearScene.visible=true;
    }

    if (count == 60) {
        count = 0;
    }

}
pixiApp.ticker.add((delta) => this.gameloop(delta, anim1, anim2));
