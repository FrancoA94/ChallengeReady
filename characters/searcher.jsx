import { useState } from "react";

const Searcher = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  <form onSubmit={handleSubmit}>
    <input
      onChange={handleChange}
      placeholder="Search a character"
      type="text"
      value={keyword}
    />
  </form>;
};
export default Searcher;
