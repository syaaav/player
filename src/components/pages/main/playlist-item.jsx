import { useState } from 'react'
import icons from '../../../img/icon/sprite.svg'
import '../../../css/style.css'

const PlaylistItem = ({ obj }) => {
  const [isLiked, setLike] = useState(false)

  function handleLike() {
    setLike((prev) => !prev)
    // добавить в избранное
  }

  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg">
              <use href={`${icons}#icon-note`} />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {obj.name} <span className="track__title-span" />
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {obj.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {obj.album}
          </a>
        </div>
        <div className="track__time">
          <svg
            className={`track__time-svg ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <use href={`${icons}#icon-like`} />
          </svg>

          <span className="track__time-text">
            {' '}
            {new Date(`${obj.duration_in_seconds}` * 1000)
              .toUTCString()
              .split(/ /)[4]
              .slice(-5)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
