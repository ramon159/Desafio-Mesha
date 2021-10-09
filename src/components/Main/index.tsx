/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
// import GetTracks from 'components/GetTracks'
import GetWeather from 'components/GetWeather'
import ListMusic from 'components/ListMusic'
import { IWeatherData } from 'api/weatherApi/IWeatherData'

function Main() {
  const [weather, setWeather] = useState<IWeatherData>()

  useEffect(() => {
    async function getItems() {
      const weatherData = await GetWeather('Rio de janeiro')
      setWeather(weatherData)
    }
    getItems()
  }, [])

  return (
    <div>
      {weather ? <h1>{Math.round(weather.main.temp)} C°</h1> : null}
      {weather ? <ListMusic temp={weather.main.temp} /> : null}
    </div>
  )
}

export default Main
