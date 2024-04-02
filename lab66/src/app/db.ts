import {Album} from "./models";

export const ALBUM: Album[] = []

for(let i = 0; i < 5; ++i){
  ALBUM.push(
    {
      userId: 1,
      id: i + 1,
      title: 'some info',
    }
  )
}
