import { IShazamData } from 'api/shazamApi/IShazamData'
import { IWeatherData } from 'api/weatherApi/IWeatherData'

export interface IPlaylist {
  dateSearch: Date
  tracks: IShazamData
  musicStyle: string
  weather: IWeatherData
}
export function Playlist({
  dateSearch,
  tracks,
  musicStyle,
  weather
}: IPlaylist): IPlaylist {
  const newPlaylist: IPlaylist = {
    dateSearch,
    tracks,
    musicStyle,
    weather
  }

  return newPlaylist
}
