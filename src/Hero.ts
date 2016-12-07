
class Hero {

    isInTeam: boolean = false;

    equipments: Equipment[] = [];

    public __cachefightPower;

    private level = 1;
    private _raiseLevel = 1.2;

    constructor(level: number, raiseLevel: number) {
        this.level = level;
        this._raiseLevel = raiseLevel;
    }

    //@Cache
    get fightPower() {
        var result = 0;
        this.equipments.forEach(equiptment => result += equiptment.fightPower);
        result += this.level * 100 * this._raiseLevel;

        this.__cachefightPower = result;
        return result;
    }

    changeHeroStatus() {
        this.isInTeam = !this.isInTeam;
    }

    addEquipment(equipment: Equipment) {
        this.equipments.push(equipment);
    }
}