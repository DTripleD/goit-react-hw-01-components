import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
  margin: 10px;
  width: 200px;
  padding: 10px;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 600;
`;

export const Image = styled.img`
  width: 48px;
`;

export const StatusLabel = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
