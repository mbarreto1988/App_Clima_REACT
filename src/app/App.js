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
            console.log(datoss.list[0].dt_txt);
            console.log(datoss.list[4].dt_txt);
            console.log(datoss.list[12].dt_txt);
            console.log(datoss.list[19].dt_txt);
            console.log(datoss.list[26].dt_txt);
            console.log(datoss.list[35].dt_txt);
    
            this.setState({
                day: datoss.list[0].dt_txt,
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null,
                day_2: datoss.list[4].dt_txt,
                temperature_2: datoss.list[4].main.temp,
                description_2: datoss.list[4].weather[0].description,
                humidity_2: datoss.list[4].main.humidity,
                wind_speed_2: datoss.list[4].wind.speed,
                city_2: datoss.list[4].name,
                country_2: datoss.list[4].sys.country,
                error_2: null,
                day_3: datoss.list[12].dt_txt,
                temperature_3: datoss.list[12].main.temp,
                description_3: datoss.list[12].weather[0].description,
                humidity_3: datoss.list[12].main.humidity,
                wind_speed_3: datoss.list[12].wind.speed,
                city_3: datoss.list[12].name,
                country_3: datoss.list[12].sys.country,
                error_3: null,
                day_4: datoss.list[19].dt_txt,
                temperature_4: datoss.list[19].main.temp,
                description_4: datoss.list[19].weather[0].description,
                humidity_4: datoss.list[19].main.humidity,
                wind_speed_4: datoss.list[19].wind.speed,
                city_4: datoss.list[19].name,
                country_4: datoss.list[19].sys.country,
                error_4: null,
                day5: datoss.list[26].dt_txt,
                temperature5: datoss.list[26].main.temp,
                description5: datoss.list[26].weather[0].description,
                humidity5: datoss.list[26].main.humidity,
                wind_speed5: datoss.list[26].wind.speed,
                city5: datoss.list[26].name,
                country5: datoss.list[26].sys.country,
                error5: null,                
                day_6: datoss.list[35].dt_txt,
                temperature_6: datoss.list[35].main.temp,
                description_6: datoss.list[35].weather[0].description,
                humidity_6: datoss.list[35].main.humidity,
                wind_speed_6: datoss.list[35].wind.speed,
                city_6: datoss.list[35].name,
                country5: datoss.list[35].sys.country,
                error5: null
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