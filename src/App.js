import React, { useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent'
import MovieInfoComponent from './components/MovieInfoComponent'
import { BiSearchAlt2 } from "react-icons/bi";

export const API_KEY = 'a9118a3a'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: black;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`



const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`


const SearchInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  color: #444;
  background-color: transparent;
  border: none;
  outline: none;
`
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`

function App() {
  const [searchQuery, updateSearchQuery] = useState('')

  const [movieList, updateMovieList] = useState([])
  const [selectedMovie, onMovieSelect] = useState()

  const [timeoutId, updateTimeoutId] = useState()

  const fetchData = async (searchQ) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`
    )
    updateMovieList(response.data.Search)
  }

  const onTextChange = (e) => {
    onMovieSelect('')
    clearTimeout(timeoutId)
    updateSearchQuery(e.target.value)
    const timeout = setTimeout(() => fetchData(e.target.value), 500)
    updateTimeoutId(timeout)
  }
  return (
    <Container>
      <Header>
        <SearchBox>
          <BiSearchAlt2/>
          <SearchInput
            placeholder="search movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <div>start typing movie</div>
        )}
      </MovieListContainer>
    </Container>
  )
}

export default App
