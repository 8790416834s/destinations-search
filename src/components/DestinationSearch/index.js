import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
    const {destinations} = props
    const {name, imgUrl} = destinations

  state = {searchInput: ''}

  render() {
    return (
      <div>
        <h1>Destination Search</h1>
        <input type="search" />
        <ul>
        <
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
