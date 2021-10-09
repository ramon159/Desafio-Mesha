export interface IShazamData {
  tracks: {
    hits: {
      track: {
        title: string
        subtitle: string
        url: string
        key: string
      }
    }[]
  }
}
