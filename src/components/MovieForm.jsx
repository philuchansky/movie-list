import styled from "styled-components";
import genres from '../genres.json';
import movieIcon from '../movie-icon.png';

const Container = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;

  form {
    header img {
      height: 80px;
    }
  }
`

const MovieForm = () => {

  return (
    <Container className="MovieForm">
      <form>
        <header>
          <img alt="Movie icon" src={movieIcon} />
        </header>
        
        <div className="form-field">
          <label htmlFor="title">Movie Title:</label>
          <input type="text" id="title" name="title" size="28" placeholder="Mission Impossible..." />
        </div>
        
        <div className="form-field">
          <label htmlFor="genre">Genre:</label>
          <select id="genre" name="genre">
            {Object.values(genres).map((genre, idx) => (
              <option key={idx} value={genre.value}>{genre.label}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="notes">Notes:</label>
          <textarea name="notes" cols="28" rows="5" id="notes" placeholder="Tom Cruise does all the stunts in this one!"></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </Container>
  )
}

export default MovieForm;