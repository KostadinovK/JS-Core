/**
 * 
 * @param {Array} args 
 */
function cookNumber(args){
    let number = Number(args[0]);
    for(let i = 1; i < args.length; i++){
        let command = args[i];
        switch(command){
            case 'chop':
                number = parseInt(number / 2);
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 20 / 100;
                break;
        }

        console.log(number);
    }
}

cookNumber(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);