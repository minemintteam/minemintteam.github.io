class GameState {
    constructor() {
        this.paused = false;
        this.gameover = false; 
        this.running = true;
    }

    setPause() {
        this.running = false;
        this.paused = true;
    }

    isPaused() {
        return this.paused;
    }

    isGameOver() {
        return this.gameover;
    }

    setGameOver() {
        this.running = false;
        this.gameover = true;
    }

    isRunning() {
        return this.running;
    }

    setRunning() {
        this.paused = false;
        this.running = true;
    }

    setStopped() {
        this.running = false;
    }
}

export default GameState;