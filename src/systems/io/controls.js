var rightPressed, leftPressed, spacePressed, upPressed, downPressed, enterPressed, mouseClicked, x, y, cw, ch;

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

class Controls {

    constructor(canvas_width, canvas_height) {
        rightPressed = leftPressed = spacePressed = upPressed = downPressed = enterPressed = mouseClicked = false;
        x = y = 0;

        cw = canvas_width;
        ch = canvas_height;

    }

    keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
            leftPressed = true;
        }
        else if(e.key == " ") {
            spacePressed = true;
        }
        else if(e.key == "Enter") {
            enterPressed = true;
        }
        else if(e.key == "Down" || e.key == "ArrowDown" ||  e.key == "s") {
            downPressed = true;
        }
        else if(e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
            upPressed = true;
        }
    }
    
    keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
            leftPressed = false;
        }
        else if(e.key == " ") {
            spacePressed = false;
        }
        else if(e.key == "Enter") {
            enterPressed = false;
        }
        else if(e.key == "Down" || e.key == "ArrowDown" ||  e.key == "s") {
            downPressed = false;
        }
        else if(e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
            upPressed = false;
        }
    }      

    mouseDownHandler(e) {
        mouseClicked = true;
        x = e.layerX;
        y = e.layerY;
    }

    mouseUpHandler(e) {
        mouseClicked = false;
        x = e.layerX;
        y = e.layerY;
    }

    touchStartHandler(e) {
        mouseClicked = true;
        x = e.touches[0].clientX - ((screenWidth - cw) / 2);
        y = e.touches[0].clientY - ((screenHeight - ch) / 2);
    }

    touchEndHandler(e) {
        mouseClicked = false;
        x = e.touches[0].clientX - ((screenWidth - cw) / 2);
        y = e.touches[0].clientY - ((screenHeight - ch) / 2);
    }

    getRightPressed() {
        return rightPressed;
    }

    getLeftPressed() {
        return leftPressed;
    }

    getSpacePressed() {
        return spacePressed;
    }

    getUpPressed() {
        return upPressed;
    }

    getDownPressed() {
        return downPressed;
    }

    getEnterPressed() {
        return enterPressed;
    }

    getMouseClicked() {
        return mouseClicked;
    }

    getMouseX() {
        return x;
    }

    getMouseY() {
        return y;
    }
}

var controls = new Controls();

document.addEventListener("keydown", controls.keyDownHandler, false);
document.addEventListener("keyup", controls.keyUpHandler, false);
document.addEventListener("mousedown", controls.mouseDownHandler, false);
document.addEventListener("mouseup", controls.mouseUpHandler, false);
document.addEventListener("touchstart", controls.touchStartHandler, false);
document.addEventListener("touched", controls.touchEndHandler, false);

export default Controls;