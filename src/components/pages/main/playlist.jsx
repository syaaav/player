import { useEffect, useState } from 'react'
import PlaylistSkeleton from './playlist-skeleton'
import PlaylistItem from './playlist-item'
import '../../../css/style.css'

const Playlist = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [songs, setSongs] = useState([])

  useEffect(() => {
    setIsLoaded(!isLoaded)
    fetch('http://51.250.72.80:8090/catalog/track/all/')
      .then((response) => response.json())
      .then((data) => {
        setSongs(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="content__playlist playlist">
      {!isLoaded ? (
        <PlaylistSkeleton />
      ) : (
        songs.map((obj) => <PlaylistItem key={obj.id} obj={obj} />)
      )}
    </div>
  )
}

export default Playlist
