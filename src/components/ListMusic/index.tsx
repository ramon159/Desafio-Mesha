import { IPlaylist } from 'components/Playlist'
import Image from 'next/image'

import * as S from './styles'

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
export default ListMusic
