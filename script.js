const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79ce90408dmshcd21753bf604900p1248e3jsndd28f751f30e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async (city) => {
    cityName.innerHTML = city;
	try {
		const queryUrl = `${url}?city=${city}`;
		const response = await fetch(queryUrl, options);
		const data = await response.json(); // Parse response as JSON

		console.log(data);

		cloud_pct.innerHTML = data.cloud_pct;
		temp.innerHTML = data.temp;
		feels_like.innerHTML = data.feels_like;
		humidity.innerHTML = data.humidity;
		min_temp.innerHTML = data.min_temp;
		max_temp.innerHTML = data.max_temp;
		wind_speed.innerHTML = data.wind_speed;
		wind_degrees.innerHTML = data.wind_degrees;
		sunrise.innerHTML = data.sunrise;
		sunset.innerHTML = data.sunset;

	} catch (error) {
		console.error(error);
	}
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
});

getWeather("Delhi");
