import '../styles/index.scss';
import * as PIXI from 'pixi.js';

import Explosives from './animations/explosions';
import Running from './animations/running_man';


const canvasWidth = 640;

(async function () {
    let app = new PIXI.Application({ width: canvasWidth, height: 360 });
    document.body.appendChild(app.view);

    const anim_running = await Running(app, PIXI);
    await Explosives(app, PIXI);

    const startX = 150;
    const startY = 100;
    anim_running.anchor.set(0.5, 0);
    anim_running.x = startX;
    anim_running.y = startY;

    const distance = canvasWidth - startX;
    const distanceForTick = distance / 60;
    let currentX = startX;
    let reverse = 0;


    app.ticker.maxFPS = 60;
    app.ticker.add(() => {
        if (!reverse && currentX > distance) {
            reverse = 1;
            anim_running.scale.x = -1;
        }
        else if (reverse && currentX < startX) {
            reverse = 0;
            anim_running.scale.x = 1;
        }

        currentX += distanceForTick * (reverse ? -1 : 1);
        anim_running.x = currentX;
    });


})();
