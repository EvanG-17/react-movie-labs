// import React from "react";
// import { getTV } from "../api/tmdb-api";
// import PageTemplate from '../components/templateTvListPage';
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

// const TvPage = (props) => {

//   const {  data, error, isLoading, isError }  = useQuery('tv', getTV)

//   if (isLoading) {
//     return <Spinner />
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>
//   }  
//   const movies = data.results;

//   // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
//   const addToFavorites = (movieId) => true 

//   return (
//     <PageTemplate
//       title="Discover TV Shows"
//       movies={movies}
//       action={(movies) => {
      
//       }}
//     />
// );
// };
// export default TvPage;