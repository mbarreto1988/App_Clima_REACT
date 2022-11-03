import React from "react";

const WeatherInfo = props => {
    console.log(props)
    return (
        <div className="cont_gral card-group">
            {props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp bg-success p-2 text-white bg-opacity-75" id="contenedor_diaDe_hoy">
                    {
                        props.day &&
                        <p className="fw-bold"><i class="fas fa-calendar"></i> Día: {props.day}, {props.country}</p>
                    }
                    {
                        props.city && props.country &&
                        <p className="fw-bold"><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p className="fw-bold"><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} ℃</p>
                    }
                    {
                        props.humidity &&
                        <p className="fw-bold"><i className="fas fa-water"></i> Humedad: {props.humidity} %</p>
                    }
                    {
                        props.wind_speed &&
                        <p className="fw-bold"><i className="fas fa-wind"></i> Viento: {props.wind_speed} Km/h</p>
                    }
                </div>
                :
                ""
            }
            <div className="position-absolute bottom-0 end-0" id="contenedor_props">
                <div className="d-flex justify-content-evenly" id="cont-props">
                    {props.city ?
                        <div className="card card-body mt-1 mx-2 animated fadeInUp bg-success p-2 text-dark bg-opacity-50" id="dias_post">
                            {
                                props.day_2 &&
                                <p><i className="fas fa-calendar"></i> Día: {props.day_2}</p>
                            }
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature_2 &&
                                <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_2} ℃</p>
                            }
                            {
                                props.humidity_2 &&
                                <p><i className="fas fa-water"></i> Humedad: {props.humidity_2} %</p>
                            }
                            {
                                props.wind_speed_2 &&
                                <p><i className="fas fa-wind"></i> Viento: {props.wind_speed_2} Km/h</p>
                            }
                        </div>
                        : ""
                    }
                    {props.city ?
                        <div className="card card-body mt-1 mx-2 animated fadeInUp bg-success p-2 text-dark bg-opacity-50" id="dias_post" >
                            {
                                props.day_3 &&
                                <p><i class="fas fa-calendar"></i> Día: {props.day_3}</p>
                            }
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature_3 &&
                                <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_3} ℃</p>
                            }
                            {
                                props.humidity_3 &&
                                <p><i className="fas fa-water"></i> Humedad: {props.humidity_3} %</p>
                            }
                            {
                                props.wind_speed_3 &&
                                <p><i className="fas fa-wind"></i> Viento: {props.wind_speed_3} Km/h</p>
                            }
                        </div>
                        : ""
                    }
                    {props.city ?
                        <div className="card card-body mt-1 mx-2 animated fadeInUp bg-success p-2 text-dark bg-opacity-50" id="dias_post" >
                            {
                                props.day_4 &&
                                <p><i class="fas fa-calendar"></i> Día: {props.day_4}</p>
                            }
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature_4 &&
                                <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_4} ℃</p>
                            }
                            {
                                props.humidity_4 &&
                                <p><i className="fas fa-water"></i> Humedad: {props.humidity_4} %</p>
                            }
                            {
                                props.wind_speed_4 &&
                                <p><i className="fas fa-wind"></i> Viento: {props.wind_speed_4} Km/h</p>
                            }
                        </div>
                        : ""
                    }
                    {props.city ?
                        <div className="card card-body mt-1 mx-2 animated fadeInUp bg-success p-2 text-dark bg-opacity-50" id="dias_post" >
                            {
                                props.day_5 &&
                                <p><i class="fas fa-calendar"></i> Día: {props.day_5}</p>
                            }
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature_5 &&
                                <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_5} ℃</p>
                            }
                            {
                                props.humidity_5 &&
                                <p><i className="fas fa-water"></i> Humedad: {props.humidity_5} %</p>
                            }
                            {
                                props.wind_speed_5 &&
                                <p><i className="fas fa-wind"></i> Viento: {props.wind_speed_5} Km/h</p>
                            }
                        </div>
                        : ""
                    }
                    {props.city ?
                        <div className="card card-body mt-1 mx-2 animated fadeInUp bg-success p-2 text-dark bg-opacity-50" id="dias_post" >
                            {
                                props.day_6 &&
                                <p><i class="fas fa-calendar"></i> Día: {props.day_6}</p>
                            }
                            {
                                props.city && props.country &&
                                <p><i className="fas fa-location-arrow"></i> Ubicacion: {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature_6 &&
                                <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature_6} ℃</p>
                            }
                            {
                                props.humidity_6 &&
                                <p><i className="fas fa-water"></i> Humedad: {props.humidity_6} %</p>
                            }
                            {
                                props.wind_speed_6 &&
                                <p><i className="fas fa-wind"></i> Viento: {props.wind_speed_6} Km/h</p>
                            }
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}


export default WeatherInfo;