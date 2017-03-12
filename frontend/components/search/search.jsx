import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.queryString != this.state.queryString) {
      this.props.fetchSearchResults(nextState.queryString);
    }
  }

  handleChange(e) {
    this.setState({ queryString: e.currentTarget.value });
  }

  render() {
    let searchResults;
    if (this.props.search.results) {
      searchResults = (
        <SearchResults
          topResult={ this.props.search.results.top_result }
          songs={ this.props.search.results.songs }
          artists={ this.props.search.results.artists }
          albums={ this.props.search.results.albums }
          playlists={ this.props.search.results.playlists }
          users={ this.props.search.results.users }
        />
      );
    }

    return (
      <div className="search-container">
        <div className="search-input">
          <input type="text" placeholder="Search" onChange={ this.handleChange }/>
          <i className="fa fa-search"></i>
        </div>
        { searchResults ? searchResults : null}
      </div>
    )
  }
}

export default Search;
