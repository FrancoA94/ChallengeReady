import { useContext, useState } from "react";
import { cartContext } from "../context/Fav";

const NavOptions = ["CHARACTERS", "LOCATIONS", "EPISODES"];

const NavBar = () => {
  const {optionSelected, setOptionSelected} = useContext(cartContext)

  const handleCheck = (e) => {
    setOptionSelected(e.target.value);
  };

  return (
    <div>
      <Checkbox
        checked={optionSelected === NavOptions[0]}
        label="Characters"
        value={NavOptions[0]}
        onChange={handleCheck}
      />
      <Checkbox
        checked={optionSelected === NavOptions[1]}
        label="Locations"
        value={NavOptions[1]}
        onChange={handleCheck}
      />
      <Checkbox
        label="Episodes"
        checked={optionSelected === NavOptions[2]}
        value={NavOptions[2]}
        onChange={handleCheck}
      />
    </div>
  );
};

const Checkbox = ({ label, value, onChange, checked }) => {
  console.log(value, checked);
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      {label}
    </label>
  );
};

export default NavBar;
