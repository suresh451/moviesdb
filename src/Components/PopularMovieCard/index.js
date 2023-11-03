import {Link} from 'react-router-dom'
import './index.css'

const PopularMovieCard = props => {
  const {popularCard} = props
  const {title, rating, imageUrl, id} = popularCard

  return (
    <li className="list-item-home">
      <img
        src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
        alt={title}
        className="popular-img"
      />
      <p className="home-title">{title}</p>
      <p>{rating}</p>
      <Link to={`movie/${id}`}>
        <button type="button">View Details</button>
      </Link>
    </li>
  )
}

export default PopularMovieCard
