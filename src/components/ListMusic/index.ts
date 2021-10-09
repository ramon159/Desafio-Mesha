import { useEffect, useState } from 'react'
import { IShazamData } from 'api/shazamApi/IShazamData'
import { IWeatherData } from 'api/weatherApi/IWeatherData'
import { fetchTracks } from 'api/shazamApi'
import { fetchWeather } from 'api/weatherApi'

import setGenre from 'utils/setMusicStyle'

const ListMusic = (city: string) => {
  const [weather, setWeather] = useState<IWeatherData>()
  const [musicStyle, setMusicStyle] = useState<string>()
  const [tracksData, setTracksData] = useState<IShazamData>()
  const [listMusic, setListMusic] = useState([])

  // set weather, and music style
  useEffect(() => {
    async function getItems() {
      const { data } = await fetchWeather(city)
      const roundTemp = Math.round(data.main.temp)
      data.main.temp = roundTemp
      setWeather(data)
      setMusicStyle(setGenre(data.main.temp))
    }
    getItems()
  }, [city])

  // set weather tracks
  useEffect(() => {
    async function getItems() {
      if (musicStyle) {
        const { data } = await fetchTracks(musicStyle)
        setTracksData(data)
      }
    }

    getItems()
  }, [musicStyle])

  return listMusic
}
export default ListMusic
