import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { borderRadius, darkGrey, darkRed } from './constants';

// Styled components
export const ActionLink = styled.span`
  &:hover {
    cursor: pointer;
    color: ${props => props.hoverColor};
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  width: ${props => (props.big ? '120px' : '80px')};
  height: ${props => (props.big ? '40px' : '20px')};
  float: ${props => (props.floatR ? 'right' : '')};
  border: none;
  border-radius: ${borderRadius};
  outline: none;
  background-color: ${props => (props.active ? darkRed : darkGrey)};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 460px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 100%, rgba(0, 0, 0, 0.45) 0%),
    url('https://preview.ibb.co/g5rn3T/netflix_header.jpg');
  object-fit: contain;
  padding: 50px 40px 30px;
`;

export const Poster = styled.img`
  max-height: 460px;
  object-fit: contain;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-size: ${props => (props.big ? '20px' : '14px')};
  color: white;
  text-transform: uppercase;
`;

export const Year = styled.span`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 2px;
  border: 1px solid ${darkGrey};
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 15%;
`;
