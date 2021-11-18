//2021-2022 samuel r rivera-bonilla

//testing input
import Controls from './systems/io/controls.js';

//testing graphics
import Graphics from './systems/io/graphics.js';

//testing map
import TileMap from './data/maps/tilemap.js';

//testing ui
import Button from './systems/ui/button.js';
import Text from './systems/ui/text.js';
import Background from './systems/ui/background.js';
import MaterialColors from './systems/ui/colors/material.js';

//testing game objects
import Player from './data/player/player.js';

let canvas = document.getElementById("game_canvas");
canvas.width = document.body.clientWidth - 0;
canvas.height = document.body.clientHeight - 0;

let gfx = new Graphics(canvas, canvas.width, canvas.height);
let input = new Controls();

let mColors = new MaterialColors();

let background = new Background([gfx,mColors.indigo_300(), 1.0]);

let xX = 30;
let yY = 30;

var tempBool = false;

let Map = new TileMap("map", "../src/data/images/tileset.png", 32, 32, 45, 45, true, gfx);
let PlayerOne = new Player("PlayerOne", 100, 100, 10, "../src/data/images/actors.png", xX, yY, 32, 32, 4, 3, 4, 0, gfx, input);

let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click"); tempBool = true; }]);
let btQuitGame = new Button([gfx,input,"Quit Game",canvas.width / 2,canvas.height - 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("quit game click"); tempBool = false; }]);

let txMouseCoordinates = new Text([gfx,canvas.width / 2, canvas.height - 20, mColors.gray_200()]);

class Game {
    drawBackgroundLayer() {
        background.drawColor();
    }

    drawGameLayer() {
        Map.draw();
        PlayerOne.draw();
        btQuitGame.draw();
    }

    drawUI() {
        btNewGame.draw();
        

        txMouseCoordinates.draw("Mouse Pressed: " + input.getMouseClicked() + ", Last X Clicked: " + input.getMouseX() + ", Last Y Clicked: " + input.getMouseY());
    }  

    update() {
        gfx.clear();
        this.drawBackgroundLayer();
        if(tempBool == false) {
            this.drawUI();
        } else {
            this.drawGameLayer();
        }
    }
}

export default Game;