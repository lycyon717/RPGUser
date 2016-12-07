
class Equipment {

    jewels: Jewel[] = [];

    public __cachefightPower;

    //@Cache
    get fightPower() {
        var result = 0;
        this.jewels.forEach(jewel => result += jewel.fightPower);
        this.__cachefightPower = result;
        return result;
    }

    addJewel(jewel:Jewel){
        this.jewels.push(jewel);
    }
}