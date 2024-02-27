import { Profile } from '../Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from '../Statistics/Statistics';
import data from '../Statistics/data.json';
import { FriendList } from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title={'Upload stats'} stats={data} />
        <FriendList friends={friends}>
          <FriendListItem
            avatar={friends[0].avatar}
            name={friends[0].name}
            isOnline={friends[0].isOnline}
          />
          <FriendListItem
            avatar={friends[1].avatar}
            name={friends[1].name}
            isOnline={friends[1].isOnline}
          />
          <FriendListItem
            avatar={friends[2].avatar}
            name={friends[2].name}
            isOnline={friends[2].isOnline}
          />
          <FriendListItem
            avatar={friends[3].avatar}
            name={friends[3].name}
            isOnline={friends[3].isOnline}
          />
          <FriendListItem
            avatar={friends[4].avatar}
            name={friends[4].name}
            isOnline={friends[4].isOnline}
          />
        </FriendList>
        <TransactionHistory items ={transactions} />
      </>
    </div>
  );
};
