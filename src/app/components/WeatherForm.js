import React from "react";

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control" />
            </div>
            <div className="form-group">
                    <select name="city" placeholder="Your City Name" className="form-control">                        
                        <option selected>Selecionar Ciudad</option>
                        <option>Buenos Aires</option>
                        <option>Corrientes</option>
                        <option>Cordoba</option>
                        <option>Mendoza</option>
                        <option>Salta</option>
                    </select>
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;