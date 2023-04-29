import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import { AppWrapper } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics title={'Upload stats'} stats={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={items}></TransactionHistory>
    </AppWrapper>
  );
};
