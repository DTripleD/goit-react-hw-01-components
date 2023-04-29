import PropTypes from 'prop-types';
import { Item, Title, Image, StatusLabel } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <StatusLabel status={isOnline}></StatusLabel>
      <Image src={avatar} alt="User avatar" />
      <Title>{name}</Title>
    </Item>
  );
};

FriendListItem.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
