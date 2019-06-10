import React from 'react';
import { GENRE } from '../constants';
import { LANGUAGES } from '../constants';

export default class MovieFilter extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      filterTitle: "",
      filterYear: "",
      filterDirector: "",
      filterGenre: "",
      filterLanguage: ""
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { filterTitle, filterYear, filterDirector, filterGenre, filterLanguage } = this.state;
    const { onSearchHandle } = this.props;
    return (
      <section className="filter-section">
        <div className="container">
          <div className="input-field">
            <p className="filter-label">Filter by Title</p>
            <input type="text" name="filter-by-title" className="input" 
              value={filterTitle} 
              onChange={(e) => this.handleChange('filterTitle', e.target.value)}/>
          </div>
          <div className="input-field">
            <p className="filter-label">Filter by Year</p>
            <input type="text" 
              name="filter-by-year" 
              className="input" 
              value={filterYear} 
              onChange={(e) => this.handleChange('filterYear', e.target.value)}/>
          </div>
          <div className="input-field">
            <p className="filter-label">Filter by Director</p>
            <input type="text" 
              name="filter-by-director" 
              className="input" 
              value={filterDirector} 
              onChange={(e) => this.handleChange('filterDirector', e.target.value)}/>
          </div>
          <div className="input-field">
            <p className="filter-label">Filter by Genre</p>
            <select className="text-area" onChange={(e) => this.handleChange("filterGenre", e.target.value)} value={filterGenre}>
              <option>Select one</option>
              { GENRE.map(movieGenre => <option>{movieGenre.name}</option>) }
            </select>
          </div>
          <div className="input-field">
            <p className="filter-label">Filter by Language</p>
            <select className="text-area" onChange={(e) => this.handleChange("filterLanguage", e.target.value)} value={filterLanguage}>
              <option>Select one</option>
              { LANGUAGES.map(movieLanguage => <option>{movieLanguage.name}</option>)}
            </select>
          </div>
          <div>
            <button onClick={() => onSearchHandle(filterTitle, filterYear, filterDirector, filterGenre, filterLanguage)} 
              className="filter-button">Filter</button>
          </div>
        </div>
      </section>
    )
  }
}