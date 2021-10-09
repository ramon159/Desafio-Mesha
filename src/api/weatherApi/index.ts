import axios from 'axios'
import { IWeatherData } from './IWeatherData'

const baseURL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (city: string) => {
  const apiKey = 'e8533443969e29557108fcb33f308d9b' // must be get of process.env, i know
  console.log('Fetching Weather')

  const response = await axios.get<IWeatherData>(baseURL, {
    params: {
      q: city,
      appid: apiKey,
      lang: 'pt_br',
      units: 'metric'
    }
  })

  return response
}
