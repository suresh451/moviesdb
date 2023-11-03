import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PopularMovieCard from '../PopularMovieCard'
import './index.css'

class Search extends Component {
  state = {
    searchList: [],
    searchInput: '',
    isLoading: false,
  }

  componentDidMount() {
    this.getSearchMovies()
  }

  getSearchMovies = async () => {
    this.setState({
      isLoading: true,
    })
    const {searchInput} = this.state
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=a161340537ea02f8e85dcffdbe07e10a&language=en-US&query=${searchInput}&page=1`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.results.map(eachMovie => ({
        id: eachMovie.id,
        imageUrl: eachMovie.backdrop_path,
        rating: eachMovie.vote_average,
        title: eachMovie.title,
      }))

      this.setState({
        searchList: updatedData,
        isLoading: false,
      })
    }
  }

  renderSearchView = () => {
    const {searchList} = this.state
    const noValues = searchList.length === 0
    return noValues ? (
      <h1></h1>
      <ul>
        {searchList.map(eachMovie => (
          <PopularMovieCard popularCard={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    ) : (
      this.getSearchMovies()
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoadingView() : this.renderSearchView()}</>
  }
}

export default Search
