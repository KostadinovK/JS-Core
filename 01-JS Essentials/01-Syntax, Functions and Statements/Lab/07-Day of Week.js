/**
 * 
 * @param {String} day 
 */
function getDayOfWeek(day){
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    for (const key in week) {
        if (key == day) {
            console.log(week[key]);
            return;            
        }
    }

    console.log("error");
    return;
}

getDayOfWeek(2);
getDayOfWeek('Tuesday');