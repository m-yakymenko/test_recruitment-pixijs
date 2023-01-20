import '../styles/index.scss';
import * as PIXI from 'pixi.js';
import image from '../images/sprite.png';


console.log('webpack starterkit');

(async function () {
    const atlasData = {
        frames: {
            man1: {
                frame: { x: 0, y: 550, w: 83, h: 112 },
                sourceSize: { w: 83, h: 112 },
                spriteSourceSize: { x: 0, y: 0, w: 83, h: 112 }
            },
            man2: {
                frame: { x: 304, y: 550, w: 83, h: 112 },
                sourceSize: { w: 83, h: 112 },
                spriteSourceSize: { x: 0, y: 0, w: 83, h: 112 }
            },
        },
        meta: {
            image: image,
            format: 'RGBA8888',
            size: { w: 835, h: 662 },
            scale: 1
        },
        animations: {
            man: ['man1', 'man2'] //array of frames by name
        }
    };


    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);

    let spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(atlasData.meta.image),
        atlasData
    );

    await spritesheet.parse();
    const anim = new PIXI.AnimatedSprite(spritesheet.animations.man);
    anim.animationSpeed = 0.0666;
    anim.play();
    app.stage.addChild(anim);


    const distance = 400;
    const startX = 100;
    const startY = 100;

    anim.x = startX;
    anim.y = startY;

    const distanceForTick = distance / 60;
    let currentX = startX;
    let reverse = 0;

    app.ticker.maxFPS = 60;

    app.ticker.add(() => {
        if (!reverse && currentX > distance) {
            reverse = 1;
        } else if (reverse && currentX < startX) {
            reverse = 0;
        }

        currentX += distanceForTick * (reverse ? -1 : 1);
        anim.x = currentX;
    });
})();
