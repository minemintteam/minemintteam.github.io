//2021-2022 samuel r rivera-bonilla

//testing input
import Controls from './systems/controls/controls.js';

//testing graphics
import Graphics from './systems/ui/graphics.js';

//testing ui
import Button from './systems/ui/button.js';
import Text from './systems/ui/text.js';
import Background from './systems/ui/background.js';
import MaterialColors from './systems/colors/material.js';

//testing game objects
import Player from './player/player.js';

let canvas = document.getElementById("game_canvas");
canvas.width = document.body.clientWidth - 100;
canvas.height = document.body.clientHeight - 100;

let gfx = new Graphics([canvas, canvas.width, canvas.height]);
let input = new Controls();

let mColors = new MaterialColors();

let background = new Background([gfx,mColors.purple_800(), 1.0]);

let PlayerOne = new Player(["Player One",canvas.width / 2,200,100,100],[gfx,"../src/images/actors.png",0,0]);
var PlayerDirection = 0;

let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2 - 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click") }]);
let btLoadGame = new Button([gfx,input,"Load Game",canvas.width / 2,canvas.height / 2,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("load game click") }]);
let btQuitGame = new Button([gfx,input,"Quit Game",canvas.width / 2,canvas.height / 2 + 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("quit game click") }]);

let txMouseCoordinates = new Text([gfx,canvas.width / 2, canvas.height - 20, mColors.gray_200()]);

var xX = canvas.width / 2;
var yY = 200;

class Game {

    updateLogic() {
        if(input.getDownPressed() == true) {
            if(input.getSpacePressed() == true) {
                yY = yY + 6;
            } else {
                yY = yY + 2.5;
            }
            PlayerOne.move(xX,yY,0);
        }
        if(input.getUpPressed() == true) {
            if(input.getSpacePressed() == true) {
                yY = yY - 6;
            } else {
                yY = yY - 2.5;
            }
            PlayerOne.move(xX,yY,3);
        }
        if(input.getRightPressed() == true) {
            if(input.getSpacePressed() == true) {
                xX = xX + 6;
            } else {
                xX = xX + 2.5;
            }
            PlayerOne.move(xX,yY,2);
        }
        if(input.getLeftPressed() == true) {
            if(input.getSpacePressed() == true) {
                xX = xX - 6;
            } else {
                xX = xX - 2.5;
            }
            PlayerOne.move(xX,yY,1);
        }
    }

    drawBackgroundLayer() {
        background.drawColor();
    }

    drawGameLayer() {
        PlayerOne.draw();
    }

    drawUI() {
        btNewGame.draw();
        btLoadGame.draw();
        btQuitGame.draw();

        txMouseCoordinates.draw("Mouse Pressed: " + input.getMouseClicked() + ", Last X Clicked: " + input.getMouseX() + ", Last Y Clicked: " + input.getMouseY());
    }  

    update(timestamp) {
        this.updateLogic();
        gfx.clear();
        this.drawBackgroundLayer();
        this.drawGameLayer();
        this.drawUI();    }
}

export default Game;