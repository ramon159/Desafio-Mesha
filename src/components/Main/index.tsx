/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { FaPlus, FaSpinner } from 'react-icons/fa'
import setGenre from 'utils/setMusicStyle'
import { fetchWeather } from 'api/weatherApi'
import { fetchTracks } from 'api/shazamApi'
import { Playlist, IPlaylist } from 'components/Playlist'
import cities from 'mock/cities'
import Link from 'next/link'

function Main() {
  const [newCity, setNewCity] = useState<string>('')
  const [loading, setLoading] = useState(false)
  // const [playlist, setPlaylist] = useState<IPlaylist>()
  const [playlistCollection, setPlaylistCollection] = useState<IPlaylist[]>([])

  useEffect(() => {
    const playlists = localStorage.getItem('playlistCollection')
    if (playlists) {
      setPlaylistCollection(JSON.parse(playlists))
    }
  }, [])

  useEffect(() => {
    if (playlistCollection) {
      localStorage.setItem(
        'playlistCollection',
        JSON.stringify(playlistCollection)
      )
    }
  }, [playlistCollection])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newCity) {
      setLoading(true)
      const { data: weather } = await fetchWeather(newCity)

      // round celsius
      weather.main.temp = Math.round(weather.main.temp)

      const dateSearch = new Date()

      const musicStyle = setGenre(weather.main.temp)

      const { data: tracks } = await fetchTracks(musicStyle)
      const newPlaylist = Playlist({ dateSearch, musicStyle, weather, tracks })
      // setPlaylist(newPlaylist)
      setPlaylistCollection([...playlistCollection, newPlaylist])
      setLoading(false)
    }
  }
  return (
    <S.Container>
      <S.Title>Playlists de musicas - Desafio Mesha</S.Title>
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
        <S.SubmitButton disabled={loading}>
          {loading ? <FaSpinner size={14} /> : <FaPlus size={14} />}
        </S.SubmitButton>
      </S.Form>

      {playlistCollection ? console.log(playlistCollection) : null}
      <S.List>
        {playlistCollection !== [] && playlistCollection
          ? playlistCollection.map((playlist, index) => (
              <li key={index}>
                <p>
                  <small>{index + 1}.</small> Playlist de {playlist.musicStyle}{' '}
                  - {playlist.weather.name} ({playlist.weather.main.temp}°C)
                </p>
                <span>
                  <Link href={`playlist/${index}`}>
                    <a>Ver playlist</a>
                  </Link>
                </span>
              </li>
            ))
          : null}
      </S.List>
    </S.Container>
  )
}

export default Main
