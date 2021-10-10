import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'
import ListMusic from 'components/ListMusic'
import { IPlaylist } from 'components/Playlist'
import { FaHome } from 'react-icons/fa'
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
