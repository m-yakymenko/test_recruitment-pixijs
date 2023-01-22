import '../styles/index.scss';
import createCanvas, { destroyCanvas } from './animations/animations';


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





