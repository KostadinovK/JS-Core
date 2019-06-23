class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    decrease(length){
        this.innerLength -= length;

        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    increase(length){
        this.innerLength += length;
    }

    toString(){
        let res = this.innerString.substr(0, this.innerLength);
        if(res.length < this.innerString.length){
            res += '...';
        }

        return res;
    }
}