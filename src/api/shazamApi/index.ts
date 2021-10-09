import axios from 'axios'
import { IShazamData } from './IShazamData'

const baseURL = 'https://shazam.p.rapidapi.com/search'

export const fetchTracks = async (genre: string) => {
  const apiKey = 'a88b66c4b7mshb4942feec9e3a9dp137aa8jsn55629e068e4f' // eu deveria colocar numa .env, eu sei
  console.log('Fetching Weather')

  const response = await axios.get<IShazamData>(baseURL, {
    params: {
      term: genre,
      locale: 'pt-BR',
      offset: '0',
      limit: '5'
    },
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  })

  console.log('Fetching tracks')
  return response
}
