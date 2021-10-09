import { fetchWeather } from 'api/weatherApi'

export default async function GetWeather(city: string) {
  const { data } = await fetchWeather(city)

  const roundTemp = Math.round(data.main.temp)
  data.main.temp = roundTemp

  return data
}
