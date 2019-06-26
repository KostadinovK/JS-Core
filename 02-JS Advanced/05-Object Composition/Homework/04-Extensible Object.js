function createObject(){
    return {
        extend: function(template){
            for (const prop in template) {
                if(typeof template[prop] === 'function'){
                    this.__proto__[prop] = template[prop];
                }else{
                    this[prop] = template[prop];
                }
            }
        }
    };
}

let object = createObject();
object.extend(
    {
        extensionMethod: function () {console.log('test')},
        extensionProperty: 'someString'
    });

console.log(object.__proto__);