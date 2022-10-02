export const getWeatherByCity = (city) => {
    return fetch(
        `http://api.weatherstack.com/current?access_key=7e116c3b6b15e316be0ef125ea3084f0&query=${city}`
        )
    .then(resp => resp.json())
    .then(data => data);
}