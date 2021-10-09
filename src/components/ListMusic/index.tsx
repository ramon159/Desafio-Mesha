import { useEffect, useState } from 'react'
import { IShazamData } from 'api/shazamApi/IShazamData'
import { IWeatherData } from 'api/weatherApi/IWeatherData'
import { fetchTracks } from 'api/shazamApi'
import { fetchWeather } from 'api/weatherApi'
import IPlaylist from './IPlayList'
import setGenre from 'utils/setMusicStyle'

interface IListMusic {
  city: string
}

const ListMusic = ({ city }: IListMusic) => {
  const [weather, setWeather] = useState<IWeatherData>()
  const [dateSearch, setDateSearch] = useState<Date>()
  const [musicStyle, setMusicStyle] = useState<string>()
  const [tracks, setTracks] = useState<IShazamData>()
  const [playlist, setPlaylist] = useState<IPlaylist>()

  // set weather, and music style
  useEffect(() => {
    async function getItems() {
      const { data } = await fetchWeather(city)
      // round celsius
      const roundTemp = Math.round(data.main.temp)
      data.main.temp = roundTemp
      // get data
      const dateNow = new Date()

      setWeather(data)
      setDateSearch(dateNow)
      setMusicStyle(setGenre(data.main.temp))
    }
    getItems()
  }, [city])

  // set tracks
  useEffect(() => {
    async function getItems() {
      if (musicStyle) {
        const { data } = await fetchTracks(musicStyle)
        setTracks(data)
      }
    }

    getItems()
  }, [musicStyle])

  // create a playlist
  useEffect(() => {
    if (weather && musicStyle && tracks && dateSearch) {
      const newPlaylist = {
        dateSearch,
        tracks,
        musicStyle,
        weather
      }
      setPlaylist(newPlaylist)
    }
  }, [weather, musicStyle, tracks, dateSearch])

  playlist ? console.log(playlist) : null

  return (
    <>
      <h1>Playlist</h1>
      {playlist ? playlist.musicStyle : null}
    </>
  )
}
export default ListMusic
