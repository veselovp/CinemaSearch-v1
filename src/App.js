import { useState, useEffect } from 'react'
import './App.css'
import Header from '../src/Components/header.js'
import Movie from '../src/Components/movie.js'
import Search from '../src/Components/search.js'

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=efd40540'

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const search = (searchValue) => {
    setLoading(true)
    setErrorMessage(null)
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search)
          setLoading(false)
        } else {
          setErrorMessage(jsonResponse.Error)
          setLoading(false)
        }
      })
  }

  return (
    <div className="App">
      <Header text="Eto poisk filjmov" />
      <div>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => <Movie movie={movie} />)
        )}
      </div>
      <Search search={search} />
    </div>
  )
}

export default App
