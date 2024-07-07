import { Component } from 'react';
import './App.css';
import Search from './components/Search/Search';

class App extends Component {
  handleSearch = (query: string) => {
    console.log('Search with query: ', query);
  };

  render() {
    return (
      <div>
        <h1>Search Example</h1>
        <Search onSearch={this.handleSearch} />
      </div>
    );
  }
}
export default App;
