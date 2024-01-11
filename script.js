const form = document.querySelector('form')
const input = document.querySelector('#searchBar')
const savedCityArray = [];

function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=f2e28fd7fa70934b7a33216497e56c05`;


    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            document.querySelector('.city').innerHTML = data.city.name;
            let extractedIndex = [0, 8, 16, 24, 32, 40];

            const date = $('.date');
            const temp = $('.temp');

            newDataObject.forEach((list, index) => {
                date.eq(index).text('Date: ' + list.dt_txt);
                temp.eq(index).text('Temp: ' + list.main.temp + ' Deg F');
            });
        })
};

form.addEventListener('submit', createButton);

form.addEventListener('submit', getUserInput);