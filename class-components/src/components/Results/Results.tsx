import './Results.css';
import { IResultsProps } from '../../types/SearchTypes';

const Results = ({ results }: IResultsProps) => {
  return results.length ? (
    <div>
      {results.map((result, index) => (
        <div key={index} className="result">
          <h3>{result.name}</h3>
          <p className="result__description">
            Hi! My name is {result.name}. I was born in {result.birth_year} year. My
            gender is {result.gender}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <h3>Nothing was founded</h3>
  );
};

export default Results;
