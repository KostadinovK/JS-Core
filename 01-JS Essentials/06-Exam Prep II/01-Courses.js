function calcCoursesPrice(jsFunds, jsAdv, jsApp, educationForm){
    let courses = [];
    let prices = [];

    if(jsFunds){
        courses.push('JS Funds');
        prices.push(170);
    }

    if(jsAdv){
        courses.push('JS Advanced');
        if(courses.includes('JS Funds')){
            prices.push(180 - 180 * 10 / 100);
        }else{
            prices.push(180);
        }
    }

    if(jsApp){
        courses.push('JS Apps');
        prices.push(190);
    }
    
    if(educationForm === 'online'){
        prices = prices.map(p => p - 6 * p / 100);
    }

    let totalPrice = prices.reduce((sum, price) => sum += price, 0);

    if(courses.length === 3){
        totalPrice -= totalPrice * 6 / 100;
    }

    return Math.round(totalPrice);
}

console.log(calcCoursesPrice(true, false, false, "onsite"));
console.log(calcCoursesPrice(true, false, false, "online"));
console.log(calcCoursesPrice(true, true, false, "onsite"));