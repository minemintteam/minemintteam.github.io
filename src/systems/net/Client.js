class Client {
    constructor(ip, port) {
        this.socket = new WebSocket(`ws://${ip}:${port}`);

        this.socket.onopen = () => {
            console.log('Connected to server');
        }

        this.socket.onmessage = (event) => {
            this.data = event.data;
        }

        this.socket.onclose = () => {
            console.log('Disconnected from server');
        }

        this.socket.onerror = (error) => {
            console.log(error);
        }

        this.x = 0; this.y = 0; this.playerName = 'Player';
    }

    send(data) {
        this.socket.send(data);
    }

    close() {
        this.socket.close();
    }

    update(x,y) {
        this.x = x;
        this.y = y;
        this.game();
    }

    network() {
        if(this.socket.readyState === WebSocket.OPEN) {
            this.socket.send('MOVE ' + this.playerName + ',' + this.x + ',' + this.y + '');
        }
    }

    setPlayerName(name) {
        this.playerName = name;
    }

    getPlayerName() {
        return this.playerName;
    }

    getData() {
        return this.data;
    }

    ping() {
        this.socket.send('PING');
    }
}
 export default Client;