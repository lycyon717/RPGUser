var Hero = (function () {
    function Hero(level, raiseLevel) {
        this.isInTeam = false;
        this.equipments = [];
        this.level = 1;
        this._raiseLevel = 1.2;
        this.level = level;
        this._raiseLevel = raiseLevel;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "fightPower"
        //@Cache
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equiptment) { return result += equiptment.fightPower; });
            result += this.level * 100 * this._raiseLevel;
            this.__cachefightPower = result;
            return result;
        }
    );
    p.changeHeroStatus = function () {
        this.isInTeam = !this.isInTeam;
    };
    p.addEquipment = function (equipment) {
        this.equipments.push(equipment);
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map