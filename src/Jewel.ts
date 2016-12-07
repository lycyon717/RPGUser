
class Jewel {

    private level: number;
    private _raiseLevel: number;

    public __cachefightPower;

    constructor(level: number, raiseLevel: number) {
        this.level = level;
        this._raiseLevel = raiseLevel;
    }

    levelUp() {
        this.level++;
    }
    //@Cache
    get fightPower() {
        var result = 0;
        result = this.level * this._raiseLevel * 30;
        this.__cachefightPower = result;
        return result;
    }
}