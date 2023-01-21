import * as PIXI from 'pixi.js';


export default async function createAnimation({ app, image, sprite, spritesheet_animations_key, animationSpeed }) {
    let spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(image),
        sprite
    );

    await spritesheet.parse();

    const anim = new PIXI.AnimatedSprite(spritesheet.animations[spritesheet_animations_key]);
    anim.animationSpeed = animationSpeed;
    app.stage.addChild(anim);

    return anim
}