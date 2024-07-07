import { Component } from 'react';

import './Results.css';
import { IResultsProps } from '../../types/SearchTypes';

class Results extends Component<IResultsProps> {
  render() {
    const { results } = this.props;
    return (
      <div>
        {results.map((result, index) => (
          <div key={index} className="result">
            <img src={result.url} alt="" />
            <h3>{result.name}</h3>
            <p className="result__description">
              Hi! My name is {result.name}. I was born in {result.birth_year} year. My
              gender is {result.gender}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
