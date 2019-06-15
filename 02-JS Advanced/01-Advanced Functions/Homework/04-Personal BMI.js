function getPersonChart(name, age, weight, height){
    let person = {
        name,
        personalInfo: {
          age,
          weight,
          height
        },
    }

    let bmi = Math.round(weight / ((height / 100)*(height / 100)));
    person.BMI = bmi;

    let status = '';
    if(bmi < 18.5){
        status = 'underweight';
    }else if(bmi >= 18.5 && bmi < 25){
        status = 'normal';
    }else if(bmi >= 25 && bmi < 30){
        status = 'overweight';
    }else{
        status = 'obese';
    }

    person.status = status;

    if(person.status === 'obese'){
        person.recommendation = 'admission required';
    }
    
    return person;
}

let chart = getPersonChart('Peter', 29, 88, 145);
console.log(chart);