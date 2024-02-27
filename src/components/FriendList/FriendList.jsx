import css from './FriendList.module.css';


/*export const FriendList = ({ friends, children }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={css.item}>
    <span className={css.status}>{friend.isOnline}</span>
    <img
      className={css.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.name}>{friend.name}</p>
  </li>
      
    ))}
  </ul>
);*/
//Using the above will make the FriendListItem component useless


export const FriendList = ({ friends, children }) => (
  <ul className={css.friendList}>{children}</ul>
);