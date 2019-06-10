import React from 'react';
import HeaderComponent from './HeaderComponent';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import movieData from '../data/movies.json';

export default class HomePage extends React.PureComponent {
  state = { 
    searchResult: movieData
  }
  searchByTitle(title, year, director, genre, language) {
    console.log(title);
    const filterMoviesData = movieData
    .filter(movieAllData => 
      (!movieAllData.Title || movieAllData.Title === title) ||
      (!movieAllData.Year || movieAllData.Year === year) || 
      (!movieAllData.Director || movieAllData.Director === director) || 
      (!movieAllData.Genre || movieAllData.Genre === genre) ||
      (!movieAllData.Language || movieAllData.Language === language)
    );

    this.setState({
      searchResult: filterMoviesData
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <MovieFilter onSearchHandle={(title, year, director, genre, language) => 
          { this.searchByTitle(title, year, director, genre, language) }} />
        <section className="movie-list-section">
          <MovieList filteredData={this.state.searchResult}/> 
        </section>
      </div>
    )
  }
}