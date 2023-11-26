import React from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PopularMoviePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopular)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const popularMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularMovies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Movies"
      movies={popularMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default PopularMoviePage;