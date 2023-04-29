import PropTypes from 'prop-types';
import {Item, Title, Image} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <span className="status"></span>
      <Image src={avatar} alt="User avatar"/>
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
