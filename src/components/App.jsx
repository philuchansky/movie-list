import styled from 'styled-components';
import sampleData from '../sampleData.json';
import SettingsControls from './SettingsControls';
import MovieForm from './MovieForm';
import MovieList from './MovieList.jsx';
import ToolTip from "./ToolTip";

const Container = styled.div`
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-family);
  line-height: var(--line-height);
  margin: 0;
  overflow-x: hidden;
  padding: 1em;
  min-height: 100vh;
  box-sizing: border-box;

  & > .content {
    display: flex;
    padding: 5em 5em;
    gap: 3em;
  }

  & [data-tip] {
    height: 100%;
  }

  & [data-id=tooltip] {
    font-size: 1rem;
    max-width: 300px;
  }
`

const App = () => {
  return (
    <Container className="App light-mode">
      <SettingsControls />
      <div className="content">
        <div data-tip data-for="movie-form-tooltip">
          <MovieForm />
        </div>
        <div data-tip data-for="movie-list-tooltip">
          <MovieList movies={sampleData} />
        </div>
      </div>

      <ToolTip id="movie-form-tooltip">
        Add movies to your list by filling out this form!
        They'll appear to the right in your movie list. 👉
      </ToolTip>
      <ToolTip id="movie-list-tooltip">
        This is your movie list! You can check off your movies as you watch them, or remove them altogether.
      </ToolTip>
    </Container>
  );
}

export default App;
