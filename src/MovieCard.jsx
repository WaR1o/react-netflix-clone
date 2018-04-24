import React from "react";

const MovieCard = props => (
  <div>
    <img alt={props.title} src={props.poster_path} />
    <span>{props.title}</span>
    <span>{props.release_date}</span>
    <br />
    {props.genres.map((genre, i) => <span key={i}>{genre}</span>)}
  </div>
);

export default MovieCard;
