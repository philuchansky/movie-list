import styled from 'styled-components';
import ToolTip from './ToolTip';
import ToggleSwitch from './ToggleSwitch';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.75em;
  }
`

const SettingsControls = () => {
  return (
    <Container className="SettingsControls">
      <label>
        <span data-tip data-for="dark-mode-tip">Dark Mode</span>
        <ToolTip id="dark-mode-tip">
          Click to toggle "dark mode" on/off
        </ToolTip>
        <ToggleSwitch />
      </label>
      
      <label>
        <span>Show Hints?</span>
        <ToggleSwitch />
      </label>
    </Container>
  )
}

export default SettingsControls;