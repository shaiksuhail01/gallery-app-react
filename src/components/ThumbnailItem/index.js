import './index.css'

const ThumbnailItem = props => {
  const {details, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const activeThumbnail = isActive ? 'activeThumbnailClass' : ' '

  const onClickThumbnail = () => {
    updateImage(id)
  }
  return (
    <li className={`listItem ${activeThumbnail}`}>
      <button type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
