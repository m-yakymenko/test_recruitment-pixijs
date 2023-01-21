import manifest from './sprite_explosive.json'
import sprite from '../../images/sprite_explosive.png'

export default async function Explosives(app, PIXI) {
    let spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(sprite),
        manifest
    );

    await spritesheet.parse();

    for (let i = 0; i < 50; i++) {
        const explosion = new PIXI.AnimatedSprite(spritesheet.animations.explosive);

        explosion.x = Math.random() * app.screen.width;
        explosion.y = Math.random() * app.screen.height;
        explosion.anchor.set(0.5);
        explosion.rotation = Math.random() * Math.PI;
        explosion.scale.set(0.75 + Math.random() * 0.5);
        explosion.gotoAndPlay(Math.random() * 26 | 0);
        app.stage.addChild(explosion);
    }
}