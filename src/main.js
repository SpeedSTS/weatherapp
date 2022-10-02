import { getWeatherByCity } from './ApiService.js';
const viewElems = {};



const getDOMelem = id => {
    return document.getElementById(id);
}

const connectHTMLelems = () => { // Podłączenie elementów z HTML
    viewElems.watherSerachView = getDOMelem('watherSerachView');
    viewElems.mainContainer = getDOMelem('mainContainer');
    viewElems.watherForecastView = getDOMelem('watherForecastView');

    viewElems.searchInput = getDOMelem('searchInput');
    viewElems.searchButton = getDOMelem('searchButton');

    viewElems.weatherCity = getDOMelem('weatherCity');
    viewElems.weatherIcon - getDOMelem('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMelem('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMelem('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMelem('weatherMinTemp');
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
}

const initializeApp = () => {
    connectHTMLelems();
    setupListeners();
}

const onClickSubmit = () => {

}

const onEnterSubmit = event => {
    if(event.key === 'Enter') {
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => {
            console.log(data);
        })
    }
}
document.addEventListener('DOMContentLoaded', initializeApp);