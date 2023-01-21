import '../styles/index.scss';
import * as PIXI from 'pixi.js';
import image from '../images/sprite.png';
import Explosives from './exposions';

const atlasData = {
    frames: {
        man1: {
            frame: { x: 0, y: 438, w: 165, h: 224 },
            sourceSize: { w: 165, h: 224 },
            spriteSourceSize: { x: 0, y: 0, w: 165, h: 224 }
        },
        man2: {
            frame: { x: 223, y: 438, w: 165, h: 224 },
            sourceSize: { w: 165, h: 224 },
            spriteSourceSize: { x: 0, y: 0, w: 165, h: 224 }
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

const canvasWidth = 640;

(async function () {
    let app = new PIXI.Application({ width: canvasWidth, height: 360 });
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


    const startX = 150;
    const startY = 100;
    anim.anchor.set(0.5, 0);

    anim.x = startX;
    anim.y = startY;

    console.log(anim.width);
    const distance = canvasWidth - startX;
    const distanceForTick = distance / 60;
    let currentX = startX;
    let reverse = 0;

    app.ticker.maxFPS = 60;

    app.ticker.add(() => {
        if (!reverse && currentX > distance) {
            reverse = 1;
            anim.scale.x = -1;
        }
        else if (reverse && currentX < startX) {
            reverse = 0;
            anim.scale.x = 1;
        }

        currentX += distanceForTick * (reverse ? -1 : 1);
        anim.x = currentX;
    });

    Explosives(app, PIXI);
})();
