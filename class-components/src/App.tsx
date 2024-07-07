import { Component } from 'react';

import './App.css';
import Search from './components/Search/Search';

import { IAppState, ISingleResult } from './types/SearchTypes';
import { BASE_URL, LS_QUERY } from './constants';
import Results from './components/Results/Results';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component<object, IAppState> {
  constructor(props: object) {
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

  simulateError = () => {
    this.setState({ error: 'Something went wrong :(' });
  };

  render() {
    const { results, error } = this.state;
    return (
      <ErrorBoundary>
        <div className="app">
          <h1>Welcome to the Star Wars World</h1>
          <div className="search-field">
            <Search onSearch={this.handleSearch} />
            <button className="error-btn" onClick={this.simulateError}>
              Throw Error
            </button>
          </div>
          <div className="results-field">
            {error ? <div>Ups, {error}</div> : <Results results={results} />}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
export default App;
