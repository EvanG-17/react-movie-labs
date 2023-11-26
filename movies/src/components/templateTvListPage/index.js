// import React, { useState } from "react";
// import Header from "../headerTvShowList";
// import FilterCard from "../filterTvShowsCard";
// import MovieList from "../tvList";
// import Grid from "@mui/material/Grid";

// function TvListPageTemplate({ movies, name, action }) {
//   const [nameFilter, setNameFilter] = useState("");
//   const [genreFilter, setGenreFilter] = useState("0");
//   const genreId = Number(genreFilter);

//   let displayedMovies = movies
//     .filter((m) => {
//       return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
//     })
//     .filter((m) => {
//       return genreId > 0 ? m.genre_ids.includes(genreId) : true;
//     });

//   const handleChange = (type, value) => {
//     if (type === "name") setNameFilter(value);
//     else setGenreFilter(value);
//   };

//   return (
//     <Grid container sx={{ padding: '20px' }}>
//       <Grid item xs={12}>
//         <Header name={name} />
//       </Grid>
//       <Grid item container spacing={5}>
//         <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
//           <FilterCard
//             onUserInput={handleChange}
//             nameFilter={nameFilter}
//             genreFilter={genreFilter}
//           />
//         </Grid>
//         <MovieList action={action} movies={displayedMovies}></MovieList>  
//       </Grid>
//     </Grid>
//   );
// }
// export default TvListPageTemplate;