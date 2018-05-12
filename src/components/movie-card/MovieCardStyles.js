import styled from 'styled-components';
import { darkGrey, grey } from '../../styles/constants';

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

export const Genres = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  color: ${grey};
`;
