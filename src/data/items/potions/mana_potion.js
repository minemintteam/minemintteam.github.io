//2021-2022 samuel r rivera-bonilla
import Item from '../items.js';

class ManaPotion extends Item {
    constructor(config) {
        let new_config = [config[0], config[1], config[2], config[3]];
        super(new_config);
        this.mana = config[4];
    }
    use(player) {
        player.manaRegen(this.mana);
    }
}

export default ManaPotion;