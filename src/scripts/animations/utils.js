import * as PIXI from 'pixi.js';


export async function createAnimation({ app, image, sprite, spritesheet_animations_key, animationSpeed, additionals }) {
    let spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(image),
        sprite
    );

    await spritesheet.parse();

    let anim = new PIXI.AnimatedSprite(spritesheet.animations[spritesheet_animations_key]);
    anim.animationSpeed = animationSpeed;
    app.stage.addChild(anim);
    anim = Object.assign(anim, additionals || {})

    return anim
}


export function getExplosiveAdditionals(sound, play_, stop_) {
    const play = play_ || window.Symbol('play');
    const stop = stop_ || window.Symbol('stop');

    const explosiveAddtitionals = {
        [play]: function () {
            this.play();
            sound.play('explosive');
        },
        [stop]: function () {
            this.stop();
            sound.stop('explosive');
        },
    }

    return [explosiveAddtitionals, play, stop]
}
