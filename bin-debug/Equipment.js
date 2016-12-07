var Equipment = (function () {
    function Equipment() {
        this.jewels = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "fightPower"
        //@Cache
        ,function () {
            var result = 0;
            this.jewels.forEach(function (jewel) { return result += jewel.fightPower; });
            this.__cachefightPower = result;
            return result;
        }
    );
    p.addJewel = function (jewel) {
        this.jewels.push(jewel);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map