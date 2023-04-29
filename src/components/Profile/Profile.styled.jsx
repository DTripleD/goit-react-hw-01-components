import styled from '@emotion/styled';

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const ProfileWrapper = styled.div`
  border: 1px solid grey;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 800;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p``;

export const StatsList = styled.ul`
  display: flex;
  background-color: aliceblue;
`;

export const StatsItem = styled.li`
  padding: 15px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
  margin-bottom: 5px;
  font-weight: 800;
`;
