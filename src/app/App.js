import React, { Component } from 'react';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

import {WEATHER_KEY} from './keys';

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getWeather = async e => {
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if(cityValue && countryValue){

            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},ar&appid=${WEATHER_KEY}&units=metric`;
            const api_dias = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=ed19f75d2b20a8a8c280df206dcb079a&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();

            const respuesta1 = await fetch(api_dias);
            const datoss = await respuesta1.json();


            console.log(datoss);
            console.log(data);
            console.log(datoss.list[0].dt_txt);
            console.log(datoss.list[8].dt_txt);
            console.log(datoss.list[16].dt_txt);
            console.log(datoss.list[24].dt_txt);
            console.log(datoss.list[32].dt_txt);
            console.log(datoss.list[39].dt_txt);
    
            this.setState({
                day: datoss.list[0].dt_txt,
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null,

                day_2: datoss.list[8].dt_txt,
                temperature_2: datoss.list[8].main.temp,
                description_2: datoss.list[8].weather[0].description,
                humidity_2: datoss.list[8].main.humidity,
                wind_speed_2: datoss.list[8].wind.speed,
                city_2: datoss.list[8].name,
                country_2: datoss.list[8].sys.country,
                error_2: null,

                day_3: datoss.list[16].dt_txt,
                temperature_3: datoss.list[16].main.temp,
                description_3: datoss.list[16].weather[0].description,
                humidity_3: datoss.list[16].main.humidity,
                wind_speed_3: datoss.list[16].wind.speed,
                city_3: datoss.list[16].name,
                country_3: datoss.list[16].sys.country,
                error_3: null,

                day_4: datoss.list[24].dt_txt,
                temperature_4: datoss.list[24].main.temp,
                description_4: datoss.list[24].weather[0].description,
                humidity_4: datoss.list[24].main.humidity,
                wind_speed_4: datoss.list[24].wind.speed,
                city_4: datoss.list[24].name,
                country_4: datoss.list[24].sys.country,
                error_4: null,

                day_5: datoss.list[32].dt_txt,
                temperature_5: datoss.list[32].main.temp,
                description_5: datoss.list[32].weather[0].description,
                humidity_5: datoss.list[32].main.humidity,
                wind_speed_5: datoss.list[32].wind.speed,
                city_5: datoss.list[32].name,
                country_5: datoss.list[32].sys.country,
                error_5: null,     

                day_6: datoss.list[39].dt_txt,
                temperature_6: datoss.list[39].main.temp,
                description_6: datoss.list[39].weather[0].description,
                humidity_6: datoss.list[39].main.humidity,
                wind_speed_6: datoss.list[39].wind.speed,
                city_6: datoss.list[39].name,
                country_6: datoss.list[39].sys.country,
                error_6: null
            });
        } else {
            this.setState({error: 'Please enter a City and a Country.'})
        }
    }

    render() {
        return (
            <div className='container p4'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>            
        )
    }
}
 
export default App;