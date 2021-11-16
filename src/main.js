//2021-2022 samuel r rivera-bonilla
import Game from './game.js';

var game = new Game();

let d = new Date();
let timestamp;

class Main {
    run() {
        timestamp = Date.now() / 1000;
        game.update(timestamp);
        window.requestAnimationFrame(main.run);
    }
}

var main = new Main();

window.requestAnimationFrame(main.run);