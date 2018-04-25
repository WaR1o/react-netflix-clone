import styled from "styled-components";

// Colors
export const darkRed = "#E60000";
export const darkGrey = "#484848";
export const grey = "#737373";
export const lighterGray = "#F7F7F7";
export const borderRadius = "5px";

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
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 2em;
`;

export const StyledFooter = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: ${darkGrey};
  color: ${darkRed};
`;

export const Card = styled.div`
  grid-column: span 1;
  border-radius: 4px;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const CardTitle = styled.span`
  float: left;
  font-size: 20px;
  font-weight: 700;
  color: ${darkGrey};
`;

export const Year = styled.span`
  display: inline-block;
  float: right;
  padding: 2px;
  border: 1px solid ${darkGrey};
  border-radius: 4px;
`;

export const Genre = styled.span`
  color: ${grey};
`;

export const DetailedMovie = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  max-height: 600px;
  justify-content: space-evenly;
  background-color: ${lighterGray};
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: contain;
`;
