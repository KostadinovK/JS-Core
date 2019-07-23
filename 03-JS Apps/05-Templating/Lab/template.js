const template = function(){
    const getTemplateString = async function(filename){
        const url = `./templates/${filename}.hbs`;
        
        let templateString = await fetch(url).then(response => response.text());
        return templateString;
    }

    const getTemplateFunc = async function(filename){
        let templateString = await getTemplateString(filename);
    
        let templateFunc = await Handlebars.compile(templateString);
        return templateFunc;
    }

    const makePartial = function(name, content){
        Handlebars.registerPartial(name, content);
    }

    return {
        getTemplateString,
        getTemplateFunc,
        makePartial
    }
}();