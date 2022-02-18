import styled from 'styled-components';
import genres from '../genres.json';

const Container = styled.article`
  flex: 1;
  width: 100%;
  border: 1px solid var(--color-bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow) var(--color-shadow);
  display: block;
  
  padding: 1rem 1.5rem;
  text-align: var(--justify-normal);
  margin-bottom: 1rem;

  & header {
    display: flex;
    justify-content: space-between;
    padding: 0;

    & .movie-title {
      font-style: italic;
    }

    .dark-mode & .movie-genre {
      filter: brightness(2)
    }
  }

  & aside {
    padding: .75rem;
    margin-bottom: .5rem;
  }
`

const MovieInfo = ({ movie }) => (
  <Container className="MovieInfo">
    <header>
      <h2 className="movie-title">"{movie.title}"</h2>
      <h3 className="movie-genre" style={{ color: genres[movie.genre].color }}>
        {genres[movie.genre].label}
      </h3>
    </header>
    {movie.notes && <aside>{movie.notes}</aside>}
    <small>Added: {movie.addedDate}</small>
  </Container>
);

export default MovieInfo;