import React from "react";

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity} %</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed} Km/h</p>
                    }
                </div>                
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fa fa-cloud fa-8x"></i>
                </div>
            }
            {props.city ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day_2 &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day_2}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature_2 &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_2} ℃, {props.description}</p>
                    }
                    {
                        props.humidity_2 &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity_2} %</p>
                    }
                    {
                        props.wind_speed_2 &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed_2} Km/h</p>
                    }
                </div>                
                : ""
            }
            {props.city ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day_3 &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day_3}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature_3 &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_3} ℃, {props.description}</p>
                    }
                    {
                        props.humidity_3 &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity_3} %</p>
                    }
                    {
                        props.wind_speed_3 &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed_3} Km/h</p>
                    }
                </div>                
                : ""
            }
            {props.city ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day_4 &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day_4}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature_4 &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_4} ℃, {props.description}</p>
                    }
                    {
                        props.humidity_4 &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity_4} %</p>
                    }
                    {
                        props.wind_speed_4 &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed_4} Km/h</p>
                    }
                </div>                
                : ""
            }
            {props.city ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day_5 &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day_5}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature_5 &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_5} ℃, {props.description}</p>
                    }
                    {
                        props.humidity_5 &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity_5} %</p>
                    }
                    {
                        props.wind_speed_5 &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed_5} Km/h</p>
                    }
                </div>                
                : ""
            }
            {props.city ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.day_6 &&
                        <p><i class="fas fa-calendar"></i> Día: {props.day_6}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature_6 &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_6} ℃, {props.description}</p>
                    }
                    {
                        props.humidity_6 &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity_6} %</p>
                    }
                    {
                        props.wind_speed_6 &&
                        <p><i className="fas fa-wind"></i> Velocidad del Viento: {props.wind_speed_6} Km/h</p>
                    }
                </div>                
                : ""
            }
        </div>
    )
}


export default WeatherInfo;