import * as S from './styles'
import { useEffect, useState } from 'react'
import { IShazamData } from 'api/shazamApi/IShazamData'
import GetTracks from 'components/GetTracks'
import setGenre from 'utils/setMusicStyle'

interface IProps {
  temp: number
}
const ListMusic = ({ temp }: IProps) => {
  const [musicStyle, setMusicStyle] = useState<string>()
  const [tracksData, setTracksData] = useState<IShazamData>()

  useEffect(() => {
    const genre = setGenre(temp)
    setMusicStyle(genre)
  }, [temp])

  useEffect(() => {
    async function getItems() {
      if (musicStyle) {
        const data = await GetTracks(musicStyle)
        setTracksData(data)
      }
    }

    getItems()
  }, [musicStyle])

  return (
    <S.Wrapper>
      {/* <h1>Listagem de musicas recomendadas</h1>
      {musicStyle ? musicStyle : null}
      {tracksData
        ? tracksData.tracks.hits.map((hit) => {
            const music = hit.track
            const musicName = music.title
            const author = music.subtitle
            const url = music.url
            const key = music.key
            return (
              <p key={key}>
                <a href={url}>{musicName}</a> - {author}
              </p>
            )
          })
        : null} */}
    </S.Wrapper>
  )
}
export default ListMusic
