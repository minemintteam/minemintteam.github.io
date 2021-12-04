//2021-2022 samuel r rivera-bonilla
class Item {
    constructor(config) {
        this.name = config[0];
        this.type = config[1];
        this.description = config[2];
        this.value = config[3];
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getDescription() {
        return this.description;
    }
    getValue() {
        return this.value;
    }

}

export default Item;