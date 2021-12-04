//2021-2022 samuel r rivera-bonilla
import Item from '../../systems/xo/items.js';

class HealthPotion extends Item {
    constructor(config) {
        let new_config = [config[0], config[1], config[2], config[3]];
        super(new_config);
        this.heal = config[4];
    }
    use(player) {
        player.heal(this.heal);
    }
}

export default HealthPotion;