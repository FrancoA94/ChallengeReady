import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../apollo/querysCharacters/querys";
import { cartContext } from "../context/Fav";

export const useGetCharacters = () => {
  const { keyword, page, setPage } = useContext(cartContext);

  const { data, loading, error } = useQuery(
    GET_CHARACTERS(page, keyword.length > 2 ? keyword : "")
  );

  const handlerNextPage = () => setPage(data?.characters?.info?.next);
  const handlerPrevPage = () => setPage(data?.characters?.info?.prev);

  return {
    characters: data?.characters?.results,
    loading,
    error,
    handlerNextPage,
    handlerPrevPage,
  };
};
