export interface IShazamData {
  tracks: {
    hits: {
      track: {
        title: string
        images: {
          background: string
        }
        subtitle: string
        url: string
        key: string
      }
    }[]
  }
}
