import css from './Profile.module.css';

export const Profile = ({ username, avatar, stats, index }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
    </div>
    <ul className={css.stats}>
      <li key={index} className={css.statsItems}>
        <span className={css.label}>About Me</span>
        <span className={css.quantity}>I am a MERN Developer</span>
      </li>
      <li key={index} className={css.statsItemsMid}>
        <span className={css.label}>Skills</span>
        <span className={css.quantity}>
          HTML, CSS, React, Node, Express, Docker
        </span>
      </li>
      <li key={index} className={css.statsItems}>
        <span className={css.label}>Hobbies and Interests</span>
        <span className={css.quantity}>Gaming, Reading</span>
      </li>
      <li key={index} className={css.statsItems}>
        <span className={css.label}>Certification</span>
        <span className={css.quantity}>
          <a
            target="_"
            href="https://drive.google.com/file/d/1c0DyXH2eKTVnOfBhgAAno5X7plUfSgTT/view"
          >
            GoIT Fullstack Developer Certification
          </a>
        </span>
      </li>
    </ul>
  </div>
);
