/**
 * 
 * @param {Array} data 
 */
function createJSON(data){
    let result = [];
    for(let i = 1; i < data.length; i++){
        let values = data[i].split("|").filter(v => v.length > 0).map(v => v.trim());
        result.push({Town: values[0], Latitude: Number(values[1]), Longitude: Number(values[2])});
    }
    console.log(JSON.stringify(result));
}

createJSON(['| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |']
);

createJSON(['| Town | Latitude | Longitude |',
            '| Veliko Turnovo | 43.0757 | 25.6172 |',
            '| Monatevideo | 34.50 | 56.11 |']
);