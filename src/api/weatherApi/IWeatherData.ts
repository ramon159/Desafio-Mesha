export interface IWeatherData {
  weather: {
    description: string
    icon: string
  }
  main: {
    temp: number
    feels_like: number
  }

  name: string
}
