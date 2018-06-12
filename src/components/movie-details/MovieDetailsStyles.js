import styled from 'styled-components';
import { darkRed, green, yellow } from '../../styles/constants';

const ratingColor = (props) => {
  if (props.children < 5) {
    return darkRed;
  } else if (props.children >= 7) {
    return green;
  }
  return yellow;
};

export const DetailedMovie = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  max-height: 500px;
  justify-content: space-evenly;
  color: white;
`;

export const Duration = styled.span`
  margin-left: 40px;
`;

export const MovieTitle = styled.h1`
  display: inline-block;
  font-size: 30px;
  font-weight: 400;
  color: ${darkRed};
`;

export const MovieWrapper = styled.div`
  padding: 0 20px 20px;
`;

export const Subheader = styled.h2`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 500;
`;

export const Rating = styled.span`
  margin-left: 20px;
  padding: 4px;
  border: 2px solid ${ratingColor};
  border-radius: 50%;
  color: ${ratingColor};
  font-size: 20px;
`;
