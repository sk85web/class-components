import React, { Component } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

interface SearchState {
  query: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const savedQuery = localStorage.getItem('searchQuery') || '';
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
    localStorage.setItem('searchQuery', trimmedQuery);
    const { onSearch } = this.props;
    onSearch(trimmedQuery);
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
