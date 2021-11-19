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

//testing camera 
import Camera from './systems/gfx/camera.js';

let canvas = document.getElementById("game_canvas");
canvas.width = 800;
canvas.height = 600;

let gfx = new Graphics(canvas, canvas.width, canvas.height);
let input = new Controls();

let mColors = new MaterialColors();

let background = new Background([gfx,mColors.gray_800(), 1.0]);

let xX = canvas.width / 2;
let yY = canvas.height / 2;

var tempBool = false;

let map = await fetch('../src/data/maps/largemaptest.json').then(response => response.json());

let PlayerOne = new Player("PlayerOne", 100, 100, 10, "../src/data/images/actors.png", xX, yY, 32, 32, 4, 3, 4, 0, gfx, input);
let Map = new TileMap("map", "../src/data/images/tileset.png", 0, 0, map, gfx);

let Cam = new Camera(PlayerOne, 32, 32, gfx);

let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2 + 20,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click"); tempBool = true; }]);

let txTitle = new Text([gfx,canvas.width / 2, canvas.height /2 - 20, mColors.gray_200()]);

class Game {

    /*
    collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                }
            }
        }
    }
    */

    drawBackgroundLayer() {
        background.drawColor();
    }

    drawGameLayer() {
        Cam.update(PlayerOne.getLocation().x, PlayerOne.getLocation().y);
        Map.drawBottom();
        PlayerOne.draw();
        Map.drawTop();
    }

    drawUI() {
        txTitle.draw("Game/Engine");
        btNewGame.draw();
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