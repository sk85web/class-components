import { Component } from 'react';

import './App.css';
import Search from './components/Search/Search';

import { IAppState, ISingleResult } from './types/SearchTypes';
import { BASE_URL, LS_QUERY } from './constants';
import Results from './components/Results/Results';

class App extends Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      hasError: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    const query = localStorage.getItem(LS_QUERY);
    if (query) {
      this.fetchData(query);
    } else {
      this.fetchData('');
    }
  }

  fetchData = async (query: string) => {
    this.setState({ isLoading: true });
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
        })),
        hasError: false,
        isLoading: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching data:', error);
      }
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (query: string) => {
    this.fetchData(query);
  };

  simulateError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw Error('test error');
    }
    const { results } = this.state;
    return (
      <div className="app">
        <h1>Welcome to the Star Wars World</h1>
        <div className="search-field">
          <Search onSearch={this.handleSearch} />
          <button className="error-btn" onClick={this.simulateError}>
            Throw Error
          </button>
        </div>
        <div className="results-field">
          {this.state.isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <Results results={results} />
          )}
        </div>
      </div>
    );
  }
}
export default App;
