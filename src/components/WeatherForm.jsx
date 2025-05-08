import React, { useState } from 'react';
import Spinner from './Spinner';

const WeatherForm = () => {
    const [city, setCity] = useState('Dhaka');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const fetchWeather = async (e) => {
        e.preventDefault();
        setError(null);
        setWeather(null);
        setLoading(true);
      
        try {
          const response = await fetch(`http://localhost:8000/api/weather?city=${encodeURIComponent(city)}`);
          const result = await response.json();
      
          if (response.ok && result.status === 'success') {
            setWeather(result.data);
          } else {
            setError(result.message || 'Could not fetch weather data for selected city');
          }
        } catch (err) {
          console.error('Error:', err);
          setError('API request failed: ' + err.message);
        }finally {
            setLoading(false);
        }
      };
      

return (
    <div className='weather-form max-w-md mx-auto mt-10 p-4 border rounded shadow'>
        <form onSubmit={fetchWeather} className='flex flex-col sm:flex-row'>
            <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter City Name'
                className='w-full sm:flex-grow border px-2 py-1 rounded-t sm:rounded-l sm:rounded-t-none mb-2 sm:mb-0'
                required
            />
            <button type='submit' className='w-full sm:w-auto bg-blue-600 text-white px-4 py-1 rounded-b sm:rounded-r sm:rounded-b-none'>
                {loading ? <Spinner size={6} color="text-white" /> : 'Get Weather'}
            </button>
        </form>
        <hr className='mt-4 mb-4' />
        {error && <p className='text-red-500 mt-4'>{error}</p>}

        {weather && (
            <div className='mt-4 p-4 border rounded bg-blue-50'>
                <h2 className='text-xl font-bold break-words'>
                    {weather.name} {weather.sys?.country && `, ${weather.sys.country}`}
                </h2>
                {weather.weather && weather.weather[0] && (
                    <p className='break-words'>{weather.weather[0].main} - {weather.weather[0].description}</p>
                )}
                {weather.main && (
                    <div className='mt-2'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="text-center p-2"><i className="fa-regular fa-sun"></i><p>Temperature: {Math.round(weather.main.temp)}°C</p></div>
                            <div className="text-center p-2"><i className="fa-solid fa-droplet"></i><p>Humidity: {weather.main.humidity}%</p></div>
                            <div className="text-center p-2"><i className="fa-solid fa-wind"></i><p>Wind Speed: {Math.round(weather.wind.speed)} m/s</p></div>
                            <div className="text-center p-2"><i className="fa-solid fa-eye"></i><p>Visibility: {Math.round(weather.visibility / 1000)} km</p></div>
                            <div className="text-center p-2">
                                <div className=""><i className="fa-regular fa-sun"></i><i className="fa-solid fa-arrow-up"></i></div><p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p></div>
                            <div className="text-center p-2">
                                <div className=""><i className="fa-regular fa-sun"></i><i className="fa-solid fa-arrow-down"></i></div><p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p></div>
                            <div className="text-center p-2"><i className="fa-solid fa-compass"></i><p>Wind Direction: {weather.wind.deg}°</p></div>
                            <div className="text-center p-2"><i className="fa-solid fa-cloud"></i><p>Cloudiness: {weather.clouds.all}%</p></div>
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
);
    
};

export default WeatherForm
