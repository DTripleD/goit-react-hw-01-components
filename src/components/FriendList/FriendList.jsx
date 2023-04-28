import {FriendListItem} from './FriendListItem/FriendListItem';
// import css from './FriendsList.module.css';

export const FriendList = ({ friends }) => {
  return (<ul className="friend-list">
    {friends.map(friend => <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}></FriendListItem>)}
  </ul>);
};
