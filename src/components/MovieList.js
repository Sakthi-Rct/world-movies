import React from 'react';

const MovieList = (props) => (
  <div className="container">
    <div className="movielist-container">
      { props.filteredData.map((movieCotent, index) => {
        return (
          <div className="list-item">
            <img src={movieCotent.Poster} alt="movie-poster" width="210" />
            <div className="movie-details">
              <h4>{movieCotent.Title}</h4>
              <p className="item-text"><span>{movieCotent.Year} - {movieCotent.Runtime} - {movieCotent.Genre}</span></p>
              <p className="item-text short-story">{movieCotent.Plot}</p>
              <p className="item-text">Country: <span>{movieCotent.Country}</span></p>
              <p className="item-text">Language: <span>{movieCotent.Language}</span></p>
              <p className="item-text">Awards: <span>{movieCotent.Awards}</span></p>
              <p className="item-text director-name">Director: <span>{movieCotent.Director}</span></p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
);

export default MovieList;