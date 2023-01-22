import '../styles/index.scss';

import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';
import audio from '../audio/explosion-01.mp3'

import createAnimation from './animations';

import image_sprite_man from '../images/sprite_man.png';
import spritesheet_sprite_man from './animations/sprite_man.json';

import image_sprite_explosive from '../images/sprite_explosive.png';
import spritesheet_sprite_explosive from './animations/sprite_explosive.json';


console.log(audio);
const canvasWidth = 640;
let app;
sound.add('explosive', audio);
let playing = false;


window.startPlaying = function (event) {
    if (!playing) {
        playing = true;
        event.target.innerText = 'Stop';
        createCanvas();
    } else {
        playing = false;
        event.target.innerText = 'Play';
        destroyCanvas();
    }
}

async function destroyCanvas() {
    app.stage.destroy(true);
    app.view.remove();
    app.destroy();
    PIXI.utils.clearTextureCache();
}

async function createCanvas() {
    app = new PIXI.Application({ width: canvasWidth, height: 360 });
    app.ticker.maxFPS = 60;
    document.body.appendChild(app.view);

    const start = window.Symbol('start');
    const stop = window.Symbol('stop');

    const animation_running = await createAnimation({
        app,
        image: image_sprite_man,
        sprite: spritesheet_sprite_man,
        spritesheet_animations_key: 'man',
        animationSpeed: 0.0666,
    });

    const animation_explosive = await createAnimation({
        app,
        image: image_sprite_explosive,
        sprite: spritesheet_sprite_explosive,
        spritesheet_animations_key: 'explosive',
        animationSpeed: 0.966,
        additionals: { [start]: null, [stop]: null },
    });
    animation_explosive[start] = function () {
        animation_explosive.play();
        sound.play('explosive');
    };
    animation_explosive[stop] = function () {
        animation_explosive.stop();
        sound.stop('explosive');
    };

    const startX = 150;
    const startY = 100;

    animation_running.anchor.set(0.5, 0);
    animation_explosive.anchor.set(0.5, 0);

    animation_running.x = startX;
    animation_running.y = startY;

    animation_explosive.x = startX - 50;
    animation_explosive.y = startY;

    const distance = canvasWidth - startX;
    const distanceForTick = distance / 60;
    let currentX = startX;
    let reverse = 0;
    let framesForExplose = 0;


    animation_running.play();
    animation_explosive.play();
    sound.play('explosive');

    app.ticker.add(() => {
        if (!reverse && currentX > distance) {
            animation_explosive[stop]();
            reverse = 1;
            animation_running.scale.x = -1;
            animation_explosive.x = currentX + 50;
        }
        else if (reverse && currentX < startX) {
            animation_explosive[stop]();
            reverse = 0;
            animation_running.scale.x = 1;
            animation_explosive.x = currentX - 50;
        } else if (!animation_explosive.playing && framesForExplose >= 30) {
            framesForExplose = 0;
            animation_explosive[start]();
        }

        currentX += distanceForTick * (reverse ? -1 : 1);
        animation_running.x = currentX;

        framesForExplose++;
    });
}
