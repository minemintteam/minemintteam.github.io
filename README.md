# Game/Engine created using Vanilla JS. (WIP)

## Current Features
```
- Input, Game Loop, and Rendering Implemented.
- Basic UI elements (buttons, text, etc.).
- Sprite Sheet, and Animation Implemented.
- Player, Enemy NPC, and Friendly NPC Implemented.
- Basic Items Implemented.
```
## Input and Graphics Example
### Input Example:
```js
let input = new Controls();
```
### Graphics Example:
```js
let canvas = document.getElementById("game_canvas");
canvas.width = document.body.clientWidth - 0;
canvas.height = document.body.clientHeight - 0;
let gfx = new Graphics([canvas, canvas.width, canvas.height]);
```
## UI Examples
### Background:
```js
// Graphics,Color,Opacity
let background = new Background([gfx,mColors.gray_200(), 1.0]);
```
### Button:
```js
// Graphics,Text,X,Y,Light Background Color,Border Color,Text Color,Dark Background Color, Callback
let btNewGame = new Button([gfx,input,"New Game",canvas.width / 2,canvas.height / 2 - 60,mColors.blue_600(),mColors.blue_200(),mColors.gray_200(),mColors.blue_800(),() => { console.log("new game click") }]);
```
### Text:
```js
// Graphics,X,Y,Text Color
let txMouseCoordinates = new Text([gfx,canvas.width / 2, canvas.height - 20, mColors.blue_900()]);
```
## Media Examples
### Character Sprite Set (32x32 width and height of tile) and each sheet is 3 colums by 4 rows. 6 sheets per Sprite Set (RPG Maker MV Style)
[0,0] [0,1] [0,2] - [0,3] [0,4] [0,5] - [0,6] [0,7] [0,8] - [0,9] [0,10] [0,11] D  
[1,0] [1,1] [1,2] - [1,3] [1,4] [1,5] - [1,6] [1,7] [1,8] - [1,9] [1,10] [1,11] L  
[2,0] [2,1] [2,2] - [2,3] [2,4] [2,5] - [2,6] [2,7] [2,8] - [2,9] [2,10] [2,11] R  
[3,0] [3,1] [3,2] - [3,3] [3,4] [3,5] - [3,6] [3,7] [3,8] - [3,9] [3,10] [3,11] D    
[4,0] [4,1] [4,2] - [4,3] [4,4] [4,5] - [4,6] [4,7] [4,8] - [4,9] [4,10] [4,11] D  
[5,0] [5,1] [5,2] - [5,3] [5,4] [5,5] - [5,6] [5,7] [5,8] - [5,9] [5,10] [5,11] L  
[6,0] [6,1] [6,2] - [6,3] [6,4] [6,5] - [6,6] [6,7] [6,8] - [6,9] [6,10] [6,11] R  
[7,0] [7,1] [7,2] - [7,3] [7,4] [7,5] - [7,6] [7,7] [7,8] - [7,9] [7,10] [7,11] D  
## Up Next
```
- Tile Sets (32x32 width and height of tile) and each sheet is. 1 sheet per Tile Set
- Maps are made with Tiled and exported as JSON
```