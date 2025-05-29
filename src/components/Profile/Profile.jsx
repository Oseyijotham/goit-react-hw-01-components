import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats, index }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li key={index} className={css.statsItems}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers.toLocaleString()}</span>
      </li>
      <li key={index} className={css.statsItemsMid}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views.toLocaleString()}</span>
      </li>
      <li key={index} className={css.statsItems}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes.toLocaleString()}</span>
      </li>
    </ul>
  </div>
);
