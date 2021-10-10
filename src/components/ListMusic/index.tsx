import { IPlaylist } from 'components/Playlist'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'
import { FaHome } from 'react-icons/fa'

interface IListMusicProps {
  playlist: IPlaylist
}

const ListMusic = ({ playlist }: IListMusicProps) => {
  return (
    <>
      <S.Title>
        Playlist de {playlist.musicStyle} - {playlist.weather.name}{' '}
        {playlist.weather.main.temp}°C
      </S.Title>
      <S.List>
        {playlist.tracks.tracks.hits.map(({ track: music }) => (
          <S.ItemList key={music.key}>
            <S.StyledLink target="_blank" href={music.url}>
              {music.title}
            </S.StyledLink>

            <small>{music.subtitle}</small>
          </S.ItemList>
        ))}
      </S.List>
    </>
  )
}

// interface IPlaylistProps {
//   posts: string
// }
function Playlist() {
  const router = useRouter()
  const { id } = router.query
  const [playlist, setPlaylist] = useState<IPlaylist>()

  useEffect(() => {
    const playlistCollection = localStorage.getItem('playlistCollection')

    if (playlistCollection) {
      const parsedPlaylists = JSON.parse(playlistCollection)
      setPlaylist(parsedPlaylists[Number(id)])
      console.log(parsedPlaylists)
    }
  }, [])
  console.log(playlist)

  return (
    <S.Container>
      <Link href={'/'}>
        <S.StyledLink>
          <FaHome size={24} />
        </S.StyledLink>
      </Link>
      {playlist ? console.log('renderizado') : console.log(playlist)}
      {playlist && <ListMusic playlist={playlist} />}
    </S.Container>
  )
}

export default Playlist
