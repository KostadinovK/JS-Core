function attachEvents() {
    let locationInput = document.getElementById('location');
    let submitBtn = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let upcomingDiv = document.getElementById('upcoming');

    submitBtn.addEventListener('click', getForecasts);

    async function getForecasts(){
        if(locationInput.value === ''){
            return;
        }
        
        let cityCode = await getCityCode(locationInput.value);

        if(cityCode === ''){
            displayError();
            return;
        }
        
        forecastDiv.style.display = 'block';
        displayCurrentConditions(cityCode);
        displayThreeDaysForecast(cityCode);
    }

    async function getCityCode(cityName){
        const locationsUrl = 'https://judgetests.firebaseio.com/locations.json';
        let code = '';

        await fetch(locationsUrl)
        .then(response => response.json())
        .then(cities => {
            for (const city of cities) {
                if(city.name === cityName){
                   code = city.code;
                }
            }
        })
        .catch(err => console.log(err));

        return code;
    }

    function displayError(){
        forecastDiv.style.display = 'block';
        forecastDiv.innerHTML = '';
        forecastDiv.textContent = 'Error';
    }

    function displayCurrentConditions(cityCode){
        const url = `https://judgetests.firebaseio.com/forecast/today/${cityCode}.json`;

        let currentDiv = document.getElementById('current');
        currentDiv.innerHTML = '';
        let label = document.createElement('div');
        currentDiv.appendChild(label);
        label.classList.add('label');
        label.textContent = 'Current conditions';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let weatherUnicode = getWeatherUnicode(data.forecast.condition);
            let div = document.createElement('div');
            
            document.getElementById('current').appendChild(div);
            div.classList.add('forecasts');

            let conditionSymbol = document.createElement('span');
            div.appendChild(conditionSymbol);
            conditionSymbol.classList.add('condition');
            conditionSymbol.classList.add('symbol');
            conditionSymbol.textContent = weatherUnicode;

            let condition = document.createElement('span');
            div.appendChild(condition);
            condition.classList.add('condition');

            let degreeSymbol = '\u00B0';
            condition.innerHTML =
            `<span class="forecast-data">${data.name}</span>
            <span class="forecast-data">${data.forecast.low}${degreeSymbol}/${data.forecast.high}${degreeSymbol}</span>
            <span class="forecast-data">${data.forecast.condition}</span>`;
        })
        .catch(err => displayError());
    }

    function displayThreeDaysForecast(cityCode){
        const url = `https://judgetests.firebaseio.com/forecast/upcoming/${cityCode}.json`;

        upcomingDiv.innerHTML = '';
        let label = document.createElement('div');
        upcomingDiv.appendChild(label);
        label.classList.add('label');
        label.textContent = 'Three-day forecast';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let div = document.createElement('div');
            upcomingDiv.appendChild(div);
            div.classList.add('forecast-info');

            for (const day of data.forecast) {
                let degreeSymbol = '\u00B0';
                let weatherUnicode = getWeatherUnicode(day.condition);
                let upcoming = document.createElement('span');
                div.appendChild(upcoming);
                upcoming.classList.add('upcoming');
                upcoming.innerHTML = 
                `<span class="symbol">${weatherUnicode}</span>
                <span class="forecast-data">${day.low}${degreeSymbol}/${day.high}${degreeSymbol}</span>
                <span class="forecast-data">${day.condition}</span>`;
            }
        })
        .catch(err => displayError());
    }

    function getWeatherUnicode(condition){
        if(condition === 'Sunny'){
            return '\u2600';
        }

        if(condition === 'Partly sunny'){
            return '\u26C5';
        }

        if(condition === 'Overcast'){
            return '\u2601';
        }

        if(condition === 'Rain'){
            return '\u2614';
        }
    }
}

attachEvents();