import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Navbar extends Component {
  state = {
    showSearchBar: false,
  }

  onClickSearchIcon = () => {
    this.setState(prevState => ({
      showSearchBar: !prevState.showSearchBar,
    }))
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.props
    if (event.key === 'Enter') {
      searchInput(event.target.value)
    }
  }

  render() {
    const {showSearchBar} = this.state
    console.log(showSearchBar)
    return (
      <nav>
        <h1 className="title">MovieDB</h1>
        <ul className="nav-list">
          <Link to="/">
            <li>Popular</li>
          </Link>
          <Link to="/top-rated">
            <li>Top Rated</li>
          </Link>
          <Link to="/upcoming">
            <li>Upcoming</li>
          </Link>
          <Link to="/search"> 
            <input
              type="search"
              placeholder="search"
              onKeyDown={this.onChangeSearchInput}
            />
          </Link>
        </ul>
        
      </nav>
    )
  }
}
export default Navbar
