class Rat{
    constructor(name){
        this.name = name;
        this._rats = [];
    }

    unite(otherRat){
        if(otherRat.name === undefined){
            return;
        }

        this._rats.push(otherRat);
    }

    getRats(){
        return this._rats;
    }

    toString(){
        let res = `${this.name}\n`;
        for (const rat of rats) {
            res += `##${rat.name}\n`
        }
        return res;
    }
}