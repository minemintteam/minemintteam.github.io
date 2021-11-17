//2021-2022 samuel r rivera-bonilla

//testing input
import Controls from './systems/io/controls.js';

//testing graphics
import Graphics from './systems/io/graphics.js';

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

let gfx = new Graphics([canvas, canvas.width, canvas.height]);
let input = new Controls();

let mColors = new MaterialColors();

let background = new Background([gfx,mColors.gray_200(), 1.0]);

let xX = 30;
let yY = 30;

let PlayerOne = new Player(["Player One",xX,yY,100,100],[gfx,"../src/data/images/actors.png",0,0]);
var PlayerDirection = 0;

let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2 - 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click") }]);
let btLoadGame = new Button([gfx,input,"Load Game",canvas.width / 2,canvas.height / 2,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("load game click") }]);
let btQuitGame = new Button([gfx,input,"Quit Game",canvas.width / 2,canvas.height / 2 + 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("quit game click") }]);

let txMouseCoordinates = new Text([gfx,canvas.width / 2, canvas.height - 20, mColors.blue_900()]);

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