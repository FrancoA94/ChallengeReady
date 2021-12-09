import { useContext } from "react";
import { cartContext } from "../context/Fav";

const Searcher = () => {
  const {keyword, setKeyword, optionSelected} = useContext(cartContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return(
    <form onSubmit={handleSubmit}>
    <input
      onChange={handleChange}
      placeholder={optionSelected}
      type="text"
      value={keyword}
    />
  </form>
  )

};
export default Searcher;
