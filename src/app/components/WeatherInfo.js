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
                    <i className="fas fa-sun fa-8x"></i>
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
        </div>
    )
}


export default WeatherInfo;