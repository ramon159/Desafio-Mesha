export default function setMusicStyle(value: number) {
  let result = ''
  if (value) {
    if (value >= 32) result = 'rock'
    if (value < 32 && value >= 24) result = 'pop'
    if (value < 24 && value >= 16) result = 'musica classica'
    if (value < 16) result = 'lofi'
  }
  return result
}
