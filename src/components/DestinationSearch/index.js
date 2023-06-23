import './index.css'

const DestinationSearch = () => {
  return (
    <div className="main-container">
      <div>
        <h1 className="main-heading">Destination Search</h1>
        <div>
          <input type="search" placeholder="search" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
      </div>
    </div>
  )
}

export default DestinationSearch
