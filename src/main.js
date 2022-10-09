import { getWeatherByCity } from './ApiService.js';
import { mapListDOMElements } from './DOMActions.js';

class WeatherApp {
    constructor() {
        this.viewElems = {};
        this.initializeApp();
    }

    initializeApp = () => {
        this.connectDOMElements();
        this.setupListeners();
    }

    connectDOMElements = () => {
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(elem => elem.id);
        this.viewElems = mapListDOMElements(listOfIds);
    }

    setupListeners = () => {
        this.viewElems.searchInput.addEventListener('keydown', this.handleSubmit);
        this.viewElems.searchButton.addEventListener('click', this.handleSubmit);
        this.viewElems.returnToSearchBtn.addEventListener('click', this.returnToSerach);
    }

    handleSubmit = () => {
        if(event.type === 'click' || event.key === 'Enter') {
            this.fadeInOut();
            let query = this.viewElems.searchInput.value;
            getWeatherByCity(query).then(data => {
                this.displayWeatherData(data)
                });
        }
    }

    fadeInOut = () => {
        if(this.viewElems.mainContainer.style.opacity === '1' ||     this.viewElems.mainContainer.style.opacity === '') {
            this.viewElems.mainContainer.style.opacity = '0';
        }
        else {
            this.viewElems.mainContainer.style.opacity = '1';
        }
    }

    switchView = () => {
        if(this.viewElems.watherSerachView.style.display !== 'none') {
            this.viewElems.watherSerachView.style.display = 'none';
            this.viewElems.watherForecastView.style.display = 'block';
        }
        else {
            this.viewElems.watherSerachView.style.display = 'flex';
            this.viewElems.watherForecastView.style.display = 'none';
        }
    }

    returnToSerach = () => {
        this.fadeInOut();
        setTimeout(() => {
            this.switchView();
            this.fadeInOut();
        }, 500);
    }

    displayWeatherData = data => {
        this.switchView();
        this.fadeInOut();
        this.viewElems.weatherCity.innerText = data.location.name;
        this.viewElems.weatherIcon.src = data.current.weather_icons[0];
    
        this.viewElems.weatherCurrentTemp.innerText = `Temperatura wynosi ${data.current.temperature} °C`;
        this.viewElems.weatherMaxTemp.innerText = `Ciśnienie wynosi ${data.current.pressure}`;
        this.viewElems.weatherMinTemp.innerText = `Chuj`;
        
    }
}

document.addEventListener('DOMContentLoaded', new WeatherApp);