import Switch from "react-switch";

const ToggleSwitch = (props) => (
  <Switch
    uncheckedIcon={false}
    checkedIcon={false}
    height={15}
    width={30}
    onColor="#118bee"
    {...props}
  />
);

export default ToggleSwitch;