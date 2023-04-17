import React from 'react'
import styled from 'styled-components'

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`

const MovieName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const MovieInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
  margin: 5px 0;
`

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie

  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect(imdbID)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year :{Year}</MovieInfo>
        <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  )
}
export default MovieComponent
