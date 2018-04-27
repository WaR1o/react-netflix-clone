import styled from "styled-components";

// Constants
export const borderRadius = "5px";

// Colors
export const darkRed = "#E60000";
export const darkGrey = "#484848";
export const grey = "#737373";
export const lighterGray = "#F7F7F7";

// Styled components
export const Wrapper = styled.div`
  width: 70%;
  margin: 0 15%;
`;

export const Text = styled.span`
  display: inline-block;
  font-size: ${props => (props.big ? "20px" : "14px")};
  color: white;
  text-transform: uppercase;
`;

export const Button = styled.button`
  margin-left: 10px;
  width: ${props => (props.big ? "120px" : "80px")};
  height: ${props => (props.big ? "40px" : "20px")};
  float: ${props => (props.floatR ? "right" : "")};
  border: none;
  border-radius: ${borderRadius};
  outline: none;
  background-color: ${props => (props.active ? darkRed : darkGrey)};
`;

export const SearchInput = styled.input`
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: ${borderRadius};
  border-bottom: 1px solid ${darkRed};
  outline: none;
  background-color: black;
  color: white;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 100%,
      rgba(0, 0, 0, 0.45) 0%
    ),
    url("/assets/img/netflix-header.jpg");
`;

export const SearchWrapper = styled.div`
  padding: 10px 50px 30px;
`;

export const AppTitle = styled.h1`
  margin: 0 0 50px;
  padding: 1em auto 1em 3em;
  font-weight: 500;
  color: ${darkRed};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 40px;
  margin-bottom: 40px;
  justify-content: space-between;
  font-weight: 700;
  background-color: ${lighterGray};
  color: ${darkGrey};
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 310px);
  justify-content: space-evenly;
`;

export const StyledFooter = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: ${darkGrey};
  color: ${darkRed};
`;

export const Card = styled.div`
  grid-column: span 1;
  justify-self: center;
  border-radius: 4px;
  overflow: hidden;
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25px);
  grid-template-columns: minmax(100px, 270px) 40px;
`;

export const CardTitle = styled.span`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  color: ${darkGrey};
`;

export const Year = styled.span`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 2px;
  border: 1px solid ${darkGrey};
  border-radius: 4px;
`;

export const Genres = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  color: ${grey};
`;

export const Poster = styled.img`
  max-height: 460px;
  object-fit: contain;
`;

export const DetailedMovie = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  max-height: 600px;
  justify-content: space-evenly;
  background-color: ${lighterGray};
`;
