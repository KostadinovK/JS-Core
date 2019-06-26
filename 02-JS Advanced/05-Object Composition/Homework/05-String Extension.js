(() => {
    String.prototype.ensureStart = function(str){
        if(this.toString().startsWith(str)){
            return this.toString();
        }

        return str + this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if(this.toString().endsWith(str)){
            return this.toString();
        }

        return this.toString() + str;
    };

    String.prototype.isEmpty = function(){
        return this.toString() === '';
    }

    String.prototype.truncate = function(n){
        if(this.toString().length <= n){
            return this.toString();
        }

        if(!this.toString().includes(' ')){
            return this.toString().substr(0, n - 3) + '...';
        }

        if(n < 4){
            let dots = '';
            for(let i = 0; i < n; i++){
                dots += '.';
            }
            
            return dots;
        }

        let parts = this.toString().split(' ');
        let res = '';
        for (const part of parts) {
            if(part.length + res.length + 3 <= n){
                res += part + ' ';
            }else{
                break;
            }
        }
        res = res.trim();
        res += '...';
        return res;
    };

    String.format = function(string, ...params){
        let placeholderPattern = /{([0-9]+)}/g;

        let m;
        while (m = placeholderPattern.exec(string)) {
            let index = Number(m[1]);
            if(index >= 0 && index < params.length){
                string = string.replace(m[0], params[index]);
            }
        }

        return string;
    }
  
})()

let str = 'the quick{0} brown{1} fox jumps over the lazy dog';
console.log(str.length);
str = String.format(str, 's', 'ss');
console.log(str);