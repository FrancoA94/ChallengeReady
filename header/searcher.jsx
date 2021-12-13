import { useContext } from "react";
import { cartContext } from "../context/Fav";

const Searcher = () => {
  const { keyword, setKeyword, optionSelected } = useContext(cartContext);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <input
      onChange={handleChange}
      placeholder={optionSelected}
      type="text"
      value={keyword}
    />
  );
};
export default Searcher;
