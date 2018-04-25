import React from "react";
import styled from "styled-components";
import moment from "moment";

const darkGrey = "#484848";
const lightGrey = "#737373";

const Card = styled.div`
  grid-column: span 1;
  border-radius: 4px;
  margin-bottom: 25px;
  overflow: hidden;
`;

const Title = styled.span`
  float: left;
  font-size: 20px;
  font-weight: 700;
  color: ${darkGrey};
`;

const Year = styled.span`
  display: inline-block;
  float: right;
  padding: 2px;
  border: 1px solid ${darkGrey};
  border-radius: 4px;
`;

const Genre = styled.span`
  color: ${lightGrey};
`;

const MovieCard = props => (
  <Card>
    <img alt={props.title} src={props.poster_path} />
    <br />
    <Title>{props.title}</Title>
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
