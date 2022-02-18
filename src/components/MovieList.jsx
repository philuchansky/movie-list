import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import MovieInfo from './MovieInfo';

const Container = styled.div`
  width: var(--width-card-large);
  flex: 1;

  & .MovieItem {
    display: flex;
    gap: 1rem;
    width: 100%;
  
    & .movie-controls {
      flex: 0;
      font-size: 2rem;
  
      svg {
        cursor: pointer;
        transition: all .25s;
        transform: scale(1);
        opacity: .85;
  
        &:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }
  }

  & h1 {
    margin-top: 12rem;
    color: #666;
    font-weight: 500;
    font-style: italic;
  }
`

const MovieList = ({ movies }) => (
  <Container className="MovieList">
    {movies.length > 0 ? movies.map((movie, idx) => (
      <div key={idx} className="MovieItem">
        <MovieInfo movie={movie} />
        
        {/* Buttons to toggle "watched" and to delete: */}
        <div className="movie-controls">
          <FontAwesomeIcon
            className="button-watched"
            icon={faCircleCheck}
            style={{ color: `var(${movie.watched ? '--color-link' : '--color-inactive'})` }}
            onClick={() => console.log('clicked on toggle watched button')}
          />
          <FontAwesomeIcon
            className="button-delete"
            icon={faCircleXmark}
            style={{ color: '#E94F37' }}
            onClick={() => console.log('clicked on delete movie button')}
          />
        </div>
      </div>
    )) : (
      <h1>👈 Plan your next movie night...</h1>
    )}
  </Container>
);


export default MovieList;