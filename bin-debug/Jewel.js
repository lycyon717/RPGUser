var Jewel = (function () {
    function Jewel(level, raiseLevel) {
        this.level = level;
        this._raiseLevel = raiseLevel;
    }
    var d = __define,c=Jewel,p=c.prototype;
    p.levelUp = function () {
        this.level++;
    };
    d(p, "fightPower"
        //@Cache
        ,function () {
            var result = 0;
            result = this.level * this._raiseLevel * 30;
            this.__cachefightPower = result;
            return result;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map