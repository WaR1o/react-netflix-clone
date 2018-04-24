import React from "react";

const MovieCard = props => (
  <div>
    <img alt={props.title} src={props.poster} />
    <span>{props.title}</span>
    <span>{props.year}</span>
    <br />
    {props.genres.map((genre, i) => <span key={i}>{genre}</span>)}
  </div>
);

export default MovieCard;
