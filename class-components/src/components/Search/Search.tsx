import React, { Component } from 'react';

import { ISearchProps, ISearchState } from '../../types/SearchTypes';
import { LS_QUERY } from '../../constants';
import './Search.css';

class Search extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    const savedQuery = localStorage.getItem(LS_QUERY) || '';
    this.state = {
      query: savedQuery,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
  };

  handleSearch = () => {
    const { query } = this.state;
    const trimmedQuery = query.trim();
    localStorage.setItem(LS_QUERY, trimmedQuery);
    const { onSearch } = this.props;
    onSearch(trimmedQuery);
  };

  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search..."
          onKeyDown={this.onKeyDown}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
