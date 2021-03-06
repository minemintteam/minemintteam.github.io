//2021-2022 samuel r rivera-bonilla

//testing input
import Controls from './systems/io/controls.js';

//testing graphics
import Graphics from './systems/io/graphics.js';

//testing map
import TileMap from './systems/gfx/tilemap.js';

//testing ui
import Button from './systems/ui/button.js';
import Text from './systems/ui/text.js';
import BackgroundColor from './systems/ui/backgroundcolor.js';
import MaterialColors from './systems/ui/colors/material.js';

//testing game objects
import Player from './systems/xo/player.js';

//testing camera 
import Camera from './systems/gfx/camera.js';

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
let canvas = document.getElementById("game_canvas");
if(isMobile.any()){
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
} else {
    canvas.width = 800;
    canvas.height = 600;
}

let gfx = new Graphics(canvas, canvas.width, canvas.height);
let input = new Controls(canvas.width, canvas.height);

let mColors = new MaterialColors();

let background = new BackgroundColor(mColors.gray_800(), 1.0,gfx);

let xX = canvas.width / 2;
let yY = canvas.height / 2;

var tempBool = false;

let map = await fetch('../src/data/maps/mmotiny.json').then(response => response.json());

let PlayerOne = new Player("SamTest", 100, 100, 10, "../src/data/images/actors.png", xX, yY, 32, 32, 4, 3, 1, 4, gfx, input);
let Map = new TileMap("map", "../src/data/images/tileset.png", 0, 0, xX, yY, map, gfx);

let Cam = new Camera(PlayerOne, 32, 32, gfx);

let btNewGame = new Button("New Game", canvas.width / 2, canvas.height / 2 + 20, mColors.gray_200(), mColors.blue_600(), mColors.blue_800(), mColors.blue_200(), gfx, input, () => { tempBool = true; });

let txTitle = new Text(canvas.width / 2, canvas.height /2 - 20, mColors.gray_200(), gfx);

var playerStart = false;

class Game {

    drawBackgroundLayer() {
        background.drawColor();
    }

    drawGameLayer() {
        var tX = PlayerOne.getLocation().x;
        var tY = PlayerOne.getLocation().y;

        Cam.update(tX, tY);
        Map.updatePlayerLocation(tX, tY);
        Map.drawBottom();
        
        PlayerOne.draw();
        Map.drawTop();
    }

    drawUI() {
        txTitle.draw("Game/Engine");
        btNewGame.draw();
    }  

    async update() {
        gfx.clear();
        this.drawBackgroundLayer();
        if(tempBool == false) {
            this.drawUI();
        } else {
            this.drawGameLayer();
            if(playerStart == false) {
                playerStart = true;
                PlayerOne.setStart(250*32, 250*32, Map.getCollisionData());
            }
        }
    }
}

export default Game;