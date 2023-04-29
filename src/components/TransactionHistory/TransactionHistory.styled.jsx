import styled from '@emotion/styled';

export const Table = styled.table`
margin-bottom: 100px;
  width: 700px;
  border-collapse: collapse;
  background-color: white;
  text-align: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
  border-radius: 5px;
`;

export const THead = styled.thead`
  color: white;
  background-color: #AED1E8;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid grey;
  color: dark;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid gray;
  color: white;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: light;
  }
`;