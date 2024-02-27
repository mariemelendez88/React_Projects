export default function Resultados(props) {
    const { numitems, items } = props;
    const timezone = items.timezone;
    const dias = items.daily.slice(0, numitems);

    return (
        <div>
            <h3>Timezone: {timezone}</h3>
            <h3>El tiempo en los próximos días será:</h3>
            <div>
                <ul id="resultados">
                    {dias.map((dia, index)=>{
                        const temperaturaCelsius = (dia.temp.max - 273.15).toFixed(2);
                        return (
                            <li key={index}>
                                <p><strong>{new Date(dia.dt * 1000).toLocaleDateString()}</strong></p>
                                <img className="tiempoimg"
                                    src={`http://openweathermap.org/img/wn/${dia.weather[0].icon}.png`}
                                    alt={`Icono de clima para ${dia.weather[0].description}`}
                                    />
                                <p>Temp: {temperaturaCelsius}°C</p>
                                <p>Humedad: {dia.humidity}%</p>
                                <p>Viento: {dia.wind_speed}m/s</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}