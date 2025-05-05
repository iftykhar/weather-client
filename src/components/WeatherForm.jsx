import React from 'react'
import { useState } from 'react'

const WeatherForm = () => {
    const [city, setCity] = useState('Dhaka');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (e) => {
        e.preventDefault();
        setError(null);
        setWeather(null);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}`);
            const data = await response.json();

            if (response.ok) {
                setWeather(data);
            } else {
                setError(data.message || 'Could not fetch weather data for selected city');
            }
        } catch (err) {
            setError('API request failed');
        }
    };

    return (
        <div className='weather-form max-x-wd mx-auto mt-10 p-4 border rounded shadow'>
            <form onSubmit={fetchWeather}>
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder='Enter City Name' 
                    className='border px-2 py-1 mr-2'
                />
                <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded'>
                    Get Weather
                </button>
            </form>
            {error && <p className='text-red-500 mt-4'>{error}</p>}
            {weather && (
                <div className='mt-4'>
                    <h2 className='text-xl font-bold'>{weather.name}, {weather.sys.country}</h2>
                    <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
                    <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default WeatherForm
