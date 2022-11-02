import React from "react";

const WeatherForm = props => (
    <div className="card card-body" id="formulario">        
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control" value="Argentina" />
            </div>
            <div className="form-group">
                    <select name="city" placeholder="Your City Name" className="form-control" id="select_ciudad">                        
                        <option selected>Selecionar Ciudad</option>
                        <option>Buenos Aires</option>
                        <option>Corrientes</option>
                        <option>Cordoba</option>
                        <option>Mendoza</option>
                        <option>Salta</option>
                    </select>
            </div>
            <button alt="Obt. Clima">
                <i>O</i>
                <i>b</i>
                <i>t.</i>
                <i>&nbsp;</i>
                <i>C</i>
                <i>l</i>
                <i>i</i>
                <i>m</i>
                <i>a</i>
            </button>
        </form>
    </div>
);

export default WeatherForm;