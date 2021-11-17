//2021-2022 samuel r rivera-bonilla
import Game from './src/game.js';

var game = new Game();

class Main {
    run() {
        timestamp = Date.now() / 1000;
        game.update();
        window.requestAnimationFrame(main.run);
    }
}

var main = new Main();

window.requestAnimationFrame(main.run);