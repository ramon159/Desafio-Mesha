import * as S from './styles'
export default function Tracks() {
  return (
    <>
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
    </>
  )
}
