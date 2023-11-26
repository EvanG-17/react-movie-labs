// import React, { useContext  } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardHeader from "@mui/material/CardHeader";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid";
// import img from '../../images/film-poster-placeholder.png'
// import { Link } from "react-router-dom";
// import Avatar from '@mui/material/Avatar';
// import { tvShowsContext} from "../contexts/tvShowsContext.js";

// export default function TvCard({ tvShow, action }) {
//   const { favorites, addToFavorites } = useContext(tvShowsContext);

//   if (favorites.find((id) => id === tvShow.id)) {
//     tvShow.favorite = true;
//   } else {
//     tvShow.favorite = false
//   }

//   const handleAddToFavorite = (e) => {
//     e.preventDefault();
//     addToFavorites(tvShow);
//   };

//   return (
//     <Card sx={{ maxWidth: 345, border: '1px solid black', borderRadius: '5px', transition: 'transform 0.15s ease-in-out', '&:hover': {transform: 'scale(1.03)'}}}>
//           <CardHeader
//         avatar={
//           tvShow.favorite ? (
//             <Avatar sx={{ backgroundColor: 'red' }}>
//               <FavoriteIcon />
//             </Avatar>
//           ) : null
//         }
//         name={
//           <Typography variant="h5" component="p">
//             {tvShow.name}{" "}
//           </Typography>
//         }
//       />
//       <CardMedia
//         sx={{ height: 500 }}
//         image={
//           tvShow.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
//             : img
//         }
//       />
//       <CardContent>
//         <Grid container>
//           <Grid item xs={6}>
//             <Typography variant="h6" component="p">
//               <CalendarIcon fontSize="small" />
//               {tvShow.first_air_date}
//             </Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="h6" component="p">
//               <StarRateIcon fontSize="small" />
//               {"  "} {tvShow.vote_average}{" "}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//       <CardActions disableSpacing>
//         {action(tvShow)}
//         <Link to={`/movies/${tvShow.id}`}>
//           <Button variant="outlined" size="medium" color="primary">
//             More Info ..
//           </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }