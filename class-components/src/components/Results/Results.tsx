import './Results.css';
import { IResultsProps } from '../../types/SearchTypes';

const Results = ({ results }: IResultsProps) => {
  console.log(results);
  return results.length ? (
    <div className="result">
      {results.map(result => (
        <div key={result.name} className="result__item">
          <h2>{result.name}</h2>
          <p className="result__description">
            Hi! My name is {result.name}. I was born in {result.birth_year} year. My
            gender is {result.gender}
          </p>
          <h3>BioCard:</h3>
          <span>Height: {result.height}</span>
          <span>Mass: {result.mass}</span>
          <span>Hair color: {result.hair_color}</span>
          <span>Skin color: {result.skin_color}</span>
          <span>Eye color: {result.eye_color}</span>
          <span>Birth year: {result.birth_year}</span>
          <span>Created: {result.created}</span>
        </div>
      ))}
    </div>
  ) : (
    <h3>Nothing was founded</h3>
  );
};

export default Results;
