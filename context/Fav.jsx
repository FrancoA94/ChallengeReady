import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listFav, setListFav] = useState([])

  // localStorage.setItem('listFav', JSON.stringify(listFav))
  // var guardado = JSON.parse(localStorage.getItem('listFav'))

  // const setLocalStorage = value => {
  //   try {
  //     setListFav(value);
  //     window.localStorage.setItem("listFav", JSON.stringify(value));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const HandlerFavorite = (id) => {
    if (listFav.includes(id)) {
      const NewFavorite = listFav.filter((item) => item !== id);
      setListFav(NewFavorite);
      return;
    }
    setListFav([...listFav, id]);
  };

  return (
    <cartContext.Provider value={{ listFav, HandlerFavorite }}>
      {children}
    </cartContext.Provider>
  );
};
