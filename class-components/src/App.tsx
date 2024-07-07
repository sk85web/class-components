import { Component } from 'react';

import './App.css';
import Search from './components/Search/Search';

import { IAppState, ISingleResult } from './types/SearchTypes';
import { BASE_URL, LS_QUERY } from './constants';
import Results from './components/Results/Results';

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      results: [],
      error: null,
    };
  }

  componentDidMount() {
    const query = localStorage.getItem(LS_QUERY);
    if (query) {
      this.fetchData(query);
    }
  }

  fetchData = async (query: string) => {
    try {
      const resp = await fetch(`${BASE_URL}/people/?search=${query}`);
      if (!resp.ok) {
        throw new Error('Fetch response failed');
      }
      const data = await resp.json();
      this.setState({
        results: data.results.map((item: ISingleResult) => ({
          name: item.name,
          birth_year: item.birth_year,
          gender: item.gender,
          avatar: item.url,
        })),
        error: null,
      });
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ error: error.message });
      }
    }
  };

  handleSearch = (query: string) => {
    this.fetchData(query);
  };

  render() {
    const { results, error } = this.state;
    return (
      <div className="app">
        <div className="search-field">
          <Search onSearch={this.handleSearch} />
        </div>
        <div className="results-field">
          <Results results={results} />
        </div>
        <button
          onClick={() => {
            throw new Error('Test Error');
          }}
        >
          Throw Error
        </button>
      </div>
    );
  }
}
export default App;
