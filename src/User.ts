
class User {
    private _raiseLevel = 1.2;

    private level = 1;

    public __cachefightPower;
    public __cachemaxHP;
    public __cacheattack;

    heroes: Hero[] = [];

    addHero(hero: Hero) {
        this.heroes.push(hero);
    }

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    @Cache
    get fightPower() {
        console.log("got the fight power!");
        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.fightPower);
        result += this.level * 100 * this._raiseLevel;

        this.__cachefightPower = result;
        return result;
    }

    @Cache
    get maxHP() {
        var result = 0;
        result = this.level * 100 * this._raiseLevel;
        this.__cachemaxHP = result;
        return result;
    }

    @Cache
    get attack() {
        var result = 0;
        result = this.level * 50 * this._raiseLevel;
        this.__cacheattack = result;
        return result;
    }
}

