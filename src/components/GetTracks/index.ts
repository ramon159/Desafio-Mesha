import { fetchTracks } from 'api/shazamApi'

export default async function GetTracks(genre: string) {
  const { data } = await fetchTracks(genre)
  return data
}
