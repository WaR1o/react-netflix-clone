import React from "react";
import moment from "moment";
import { Card, CardTitle, Poster, Year, Genre } from "./styles";

const MovieCard = props => (
  <Card>
    <Poster alt={props.title} src={props.poster_path} />
    <br />
    <CardTitle>{props.title}</CardTitle>
    <Year>{moment(props.release_date).format("YYYY")}</Year>
    <br />
    <p>
      {props.genres.map((genre, i) => (
        <Genre key={i}>
          {i > 0 ? " & " : ""}
          {genre}
        </Genre>
      ))}
    </p>
  </Card>
);

export default MovieCard;
