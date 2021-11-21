//2021-2022 samuel r rivera-bonilla

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSAvvWJxE1kKUWpg5x5VAhjLqhtvQ5EtQ",
    authDomain: "funtest-9070f.firebaseapp.com",
    databaseURL: "https://funtest-9070f-default-rtdb.firebaseio.com",
    projectId: "funtest-9070f",
    storageBucket: "funtest-9070f.appspot.com",
    messagingSenderId: "858488562846",
    appId: "1:858488562846:web:2ba859dde4e82dd283878f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let database = getDatabase();

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

//testing network players friendly class
import Friendly from './data/npc/friendly.js';

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

let map = await fetch('../src/data/maps/mmotiny.json').then(response => response.json());


var otherPlayers = [];
let PlayerOne = new Player("PlayerOne", 100, 100, 10, "../src/data/images/actors.png", xX, yY, 32, 32, 4, 3, 1, 4, gfx, input);
let Map = new TileMap("map", "../src/data/images/tileset.png", 0, 0, xX, yY, map, gfx);

let Cam = new Camera(PlayerOne, 32, 32, gfx);

let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2 + 20,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click"); tempBool = true; }]);

let txTitle = new Text([gfx,canvas.width / 2, canvas.height /2 - 20, mColors.gray_200()]);

var playerStart = false;

let player_name = "SamTest";

async function updateFirebase() {
    set(ref(database, 'users/' + player_name), {
        name: player_name,
        x: PlayerOne.getLocation().x,
        y: PlayerOne.getLocation().y,
        health: PlayerOne.getHealth(),
        mana: PlayerOne.getMana()
      });
}

async function updateGameFromServer() {
    const players = ref(database, 'users/');
    onValue(players, (snapshot) => {
        const data = snapshot.val();
        var playerObjects = Object.keys(data); 
        var i = 0;
        for(i = 0; i < playerObjects.length; i++) {
            if(playerObjects[i] != player_name) {
                otherPlayers[i - 1] = new Friendly(data[playerObjects[i]].name, data[playerObjects[i]].health, data[playerObjects[i]].mana, "../src/data/images/actors.png", data[playerObjects[i]].x, data[playerObjects[i]].y, 32, 32, 4, 3, 1, 4, gfx);
            }
        }
        console.log(otherPlayers);
    });

}
updateGameFromServer();

//setInterval(updateFirebase, 1000/64);

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
        var tX = PlayerOne.getLocation().x;
        var tY = PlayerOne.getLocation().y;
        Cam.update(tX, tY);
        Map.updatePlayerLocation(tX, tY);
        Map.drawBottom();
        var i = 0;
        
        for(i = 0; i < otherPlayers.length; i++) {
            otherPlayers[i].draw();
        }
        
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
            if(playerStart == false) {
                playerStart = true;
                PlayerOne.setStart(250 * 32, 250 * 32);
            }
        }
    }
}

export default Game;