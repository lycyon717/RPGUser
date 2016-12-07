var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User = (function () {
    function User() {
        this._raiseLevel = 1.2;
        this.level = 1;
        this.heroes = [];
    }
    var d = __define,c=User,p=c.prototype;
    p.addHero = function (hero) {
        this.heroes.push(hero);
    };
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    d(p, "fightPower"
        ,function () {
            console.log("got the fight power!");
            var result = 0;
            this.heroesInTeam.forEach(function (hero) { return result += hero.fightPower; });
            result += this.level * 100 * this._raiseLevel;
            this.__cachefightPower = result;
            return result;
        }
    );
    d(p, "maxHP"
        ,function () {
            var result = 0;
            result = this.level * 100 * this._raiseLevel;
            this.__cachemaxHP = result;
            return result;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            result = this.level * 50 * this._raiseLevel;
            this.__cacheattack = result;
            return result;
        }
    );
    __decorate([
        Cache
    ], p, "fightPower", null);
    __decorate([
        Cache
    ], p, "maxHP", null);
    __decorate([
        Cache
    ], p, "attack", null);
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map