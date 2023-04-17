import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { API_KEY } from '../App'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1c1c1c;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
`

const CoverImage = styled.img`
  height: 250px;
  margin-right: 1rem;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const MovieName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const MovieInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const Close = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  margin-left: auto;
`

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState()
  const { selectedMovie } = props

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data))
  }, [selectedMovie])
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        'Loading...'
      )}
    </Container>
  )
}
export default MovieInfoComponent
