import React, { useState } from 'react'
import * as S from './styles'
import { FaPlus } from 'react-icons/fa'
import setGenre from 'utils/setMusicStyle'
import { fetchWeather } from 'api/weatherApi'
import { fetchTracks } from 'api/shazamApi'
import { Playlist, IPlaylist } from 'components/Playlist'
import cities from 'mock/cities'
import { PlaylistCollectionContext } from 'context/PlaylistCollectionContext'

// import ListMusic from 'components/ListMusic'
function Main() {
  const [newCity, setNewCity] = useState<string>('')
  // const [loading, setLoading] = useState(true)
  const [playlist, setPlaylist] = useState<IPlaylist>()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newCity) {
      const { data: weather } = await fetchWeather(newCity)

      // round celsius
      weather.main.temp = Math.round(weather.main.temp)

      const dateSearch = new Date()

      const musicStyle = setGenre(weather.main.temp)

      const { data: tracks } = await fetchTracks(musicStyle)
      setPlaylist(Playlist({ dateSearch, musicStyle, weather, tracks }))
    }
  }
  if (playlist) console.log(playlist)
  return (
    <S.Container>
      <S.Title>Desafio Mesha</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar lugar. Ex.: Rio de Janeiro"
          value={newCity}
          onChange={handleInputChange}
          list="cities"
        />
        <datalist id="cities">
          {/* possible feature to search real countrys using api of cities*/}
          {cities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>
        <S.SubmitButton>
          <FaPlus size={14} />
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}

export default Main
