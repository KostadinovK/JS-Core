function solve() {

    let keyword = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let resultElement = document.getElementById('result');

    let messagePattern = new RegExp(`${keyword}(.+)${keyword}`, 'ig');

    let north = getCoordinates(text, 'north');
    let east = getCoordinates(text, 'east');

    let northCoordinateElement = document.createElement('p');
    resultElement.appendChild(northCoordinateElement);
    northCoordinateElement.textContent = north;

    let eastCoordinateElement = document.createElement('p');
    resultElement.appendChild(eastCoordinateElement);
    eastCoordinateElement.textContent = east;

    let messageMatch = messagePattern.exec(text);
    
    let messageElement = document.createElement('p');
    resultElement.appendChild(messageElement);
    messageElement.textContent = `Message: ${messageMatch[1]}`;


    function getCoordinates(text, direction){

        let pattern = new RegExp(`(${direction})[\\s\\S]*?(\\d{2})[^,]*?,[^,]*?(\\d{6})`, 'gi');
        let matches = text.match(pattern);
        
        let coordinates = matches[0];

        if(direction === 'north'){
            coordinates =  matches[matches.length - 1];
        }

        let partsPattern = new RegExp('(\\d{2})[^,]*?,[^,]*?(\\d{6})', 'g');
        let parts = partsPattern.exec(coordinates);

        let coordinateSign = direction[0].toUpperCase();
        let part = parts[1] + '.' + parts[2] + ' ' + coordinateSign;

        return part;
    }
}