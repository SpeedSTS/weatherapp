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
    viewElems.returnToSearchBtn = getDOMelem('returnToSearchBtn');
}

const setupListeners = () => {
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
    viewElems.searchButton.addEventListener('click', onClickSubmit);
    viewElems.returnToSearchBtn.addEventListener('click', returnToSerach);
}

const initializeApp = () => {
    connectHTMLelems();
    setupListeners();
}

const onClickSubmit = () => {
    let query = viewElems.searchInput.value;
    getWeatherByCity(query).then(data => {
        console.log(data);
        switchView();
    })
}

const onEnterSubmit = event => {
    if(event.key === 'Enter') {
        fadeInOut();
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then(data => {
            console.log(data);
            switchView();
            fadeInOut()
        })
    }
}

const fadeInOut = () => {
    if(viewElems.mainContainer.style.opacity === '1' ||     viewElems.mainContainer.style.opacity === '') {
        viewElems.mainContainer.style.opacity = '0';
    }
    else {
        viewElems.mainContainer.style.opacity = '1';
    }
}

const switchView = () => {
    if(viewElems.watherSerachView.style.display !== 'none') {
        viewElems.watherSerachView.style.display = 'none';
        viewElems.watherForecastView.style.display = 'block';
    }
    else {
        viewElems.watherSerachView.style.display = 'block';
        viewElems.watherForecastView.style.display = 'none';
    }
}

const returnToSerach = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}
document.addEventListener('DOMContentLoaded', initializeApp);