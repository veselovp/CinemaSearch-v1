import styles from './movie.module.css'

function Movie({ movie }) {
  const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

  return (
    <div className={styles.cart}>
      <h1>{movie.Title}</h1>
      <img src={poster} alt="" />
      <p>{movie.Year}</p>
    </div>
  )
}

export default Movie
