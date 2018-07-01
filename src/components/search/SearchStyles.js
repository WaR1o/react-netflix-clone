import styled from 'styled-components';
import { borderRadius, darkRed, darkGrey, lighterGray } from '../../styles/constants';

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

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 40px;
  margin-bottom: 40px;
  justify-content: space-between;
  font-weight: 700;
  background-color: ${lighterGray};
  color: ${darkGrey};
`;
