import image from '../../images/sprite_man.png';
import sprite from './sprite_man.json';


export default async function Running(app, PIXI) {
    let spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(image),
        sprite
    );

    await spritesheet.parse();

    const anim = new PIXI.AnimatedSprite(spritesheet.animations.man);
    anim.animationSpeed = 0.0666;
    anim.play();
    app.stage.addChild(anim);

    return anim
}