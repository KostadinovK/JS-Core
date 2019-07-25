const template = function(){
    const getTemplateString = async function(filename){
        const url = `./templates/${filename}.hbs`;
        let templateString = await fetch(url).then(response => response.text());
    
        return templateString;
    }

    const getTemplateFunc = async function(filename){
        let string = await getTemplateString(filename);

        let func = await Handlebars.compile(string);

        return func;
    }

    const makePartial = function(name, content){
        Handlebars.registerPartial(name, content);
    }

    return {
        getTemplateString,
        getTemplateFunc,
        makePartial
    };
}();