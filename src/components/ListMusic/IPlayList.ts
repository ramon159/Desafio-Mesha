import { IShazamData } from 'api/shazamApi/IShazamData'
import { IWeatherData } from 'api/weatherApi/IWeatherData'

export default interface IPlaylist {
  dateSearch: Date
  tracks: IShazamData
  musicStyle: string
  weather: IWeatherData
}
