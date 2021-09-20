import { React, useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({ location: {}, current: {} })
  const api_key = process.env.REACT_APP_API_KEY
  const baseUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setWeather(response.data)
    })
  }, [capital, baseUrl])

  return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <div>
        <b>temperature:</b> {weather.current.temperature} Celsius
      </div>
      <img
        src={weather.current.weather_icons}
        alt={weather.current.weather_descriptions}
      />
      <div>
        <b>wind: </b>
        {weather.current.wind_speed} kph direction {weather.current.wind_dir}
      </div>
    </div>
  )
}

export default Weather
