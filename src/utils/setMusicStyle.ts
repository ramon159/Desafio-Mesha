export default function setMusicStyle(temp: number) {
  let result = ''
  if (temp) {
    if (temp >= 32) result = 'rock'
    if (temp < 32 && temp >= 24) result = 'pop'
    if (temp < 24 && temp >= 16) result = 'musica classica'
    if (temp < 16) result = 'lofi'
  }
  return result
}
