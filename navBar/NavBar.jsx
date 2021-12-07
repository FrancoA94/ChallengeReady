import { useState } from "react";

const NavBar = () => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <div>
      <Checkbox label="Characters"
       value={check} 
       onChange={handleChange} />
       <Checkbox label="Locations"
       value={!check} 
       onChange={handleChange} />
       <Checkbox label="Episodes"
       value={!check} 
       onChange={handleChange} />
    </div>
  );
};


const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" 
        checked={value} 
        onChange={onChange} />
        {label}
      </label>
    );
  };

export default NavBar;
