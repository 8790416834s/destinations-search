import './index.css'

const DestinationItem = props => {
  const {image, key} = props
  const {id, name, imgUrl} = image

  return (
    <li>
      <img src={imgUrl} alt={name} className="destinations-image" />
      <p className="destinations-name">{name}</p>
    </li>
  )
}

export default DestinationItem
