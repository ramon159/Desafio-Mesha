import React, { createContext, useState } from 'react'
import { IPlaylist } from 'components/Playlist'

interface PropsPlaylistCollectionContext {
  playlistCollection: IPlaylist[]
  setPlaylistCollection: React.Dispatch<React.SetStateAction<IPlaylist[]>>
}

export const PlaylistCollectionContext = createContext(
  {} as PropsPlaylistCollectionContext
)

export const PlaylistCollectionProvider = () => {
  const [playlistCollection, setPlaylistCollection] = useState<IPlaylist[]>([])

  const savePlaylist = (playlist: IPlaylist) => {
    const newPlaylist: IPlaylist = playlist
    setPlaylistCollection([...playlistCollection, newPlaylist])
  }

  const removePlaylist = (dateSearch: Date) => {
    const newCollectionPlaylist = playlistCollection.filter(
      (playlist: IPlaylist) => {
        if (playlist.dateSearch !== dateSearch) {
          return playlist
        }
      }
    )
    setPlaylistCollection([...newCollectionPlaylist])
  }
  return (
    <PlaylistCollectionContext.Provider
      value={{ playlistCollection, setPlaylistCollection }}
    ></PlaylistCollectionContext.Provider>
  )
}
