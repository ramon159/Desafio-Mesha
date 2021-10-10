import React, { createContext, useState } from 'react'
import { IPlaylist } from 'components/Playlist'

interface PropsPlaylistCollectionContext {
  playlistCollection: IPlaylist[]
  setPlaylistCollection: React.Dispatch<React.SetStateAction<IPlaylist[]>>
  // savePlaylist: (playlist: IPlaylist) => void
  // removePlaylist: (dateSearch: Date) => void
}

export const PlaylistCollectionContext = createContext(
  {} as PropsPlaylistCollectionContext
)

export const PlaylistCollectionProvider = () => {
  const [playlistCollection, setPlaylistCollection] = useState<IPlaylist[]>([])

  // function savePlaylist(playlist: IPlaylist) {
  //   const newPlaylist: IPlaylist = playlist
  //   setPlaylistCollection([...playlistCollection, newPlaylist])
  // }

  // function removePlaylist(dateSearch: Date) {
  //   const filteredCollectionPlaylist = playlistCollection.filter(
  //     (playlist: IPlaylist) => playlist.dateSearch !== dateSearch
  //   )
  //   setPlaylistCollection([...filteredCollectionPlaylist])
  // }
  return (
    <PlaylistCollectionContext.Provider
      value={{ playlistCollection, setPlaylistCollection }}
    ></PlaylistCollectionContext.Provider>
  )
}
