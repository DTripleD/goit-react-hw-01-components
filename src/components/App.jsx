import user from './Profile/user.json'; 
import data from './Statistics/data.json';
import friends from './FriendList/friends.json'
import items from './TransactionHistory/transactions.json'
import {Profile} from './Profile/Profile'
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}></Profile>

      <Statistics title={"Upload stats"} stats={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={items}></TransactionHistory>
    </div>
  );
};
