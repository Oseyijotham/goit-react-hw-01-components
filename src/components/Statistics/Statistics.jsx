import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
      <li key={stats[0].id} className={css.item}>
        <span className={css.label}>{stats[0].label}</span>
        <span className={css.percentage}>{stats[0].percentage}%</span>
      </li>
      <li key={stats[1].id} className={css.item}>
        <span className={css.label}>{stats[1].label}</span>
        <span className={css.percentage}>{stats[1].percentage}%</span>
      </li>
      <li key={stats[2].id} className={css.item}>
        <span className={css.label}>{stats[2].label}</span>
        <span className={css.percentage}>{stats[2].percentage}%</span>
      </li>
      <li key={stats[3].id} className={css.item}>
        <span className={css.label}>{stats[3].label}</span>
        <span className={css.percentage}>{stats[3].percentage}%</span>
      </li>
      <li key={stats[4].id} className={css.item}>
        <span className={css.label}>{stats[4].label}</span>
        <span className={css.percentage}>{stats[4].percentage}</span>
      </li>
    </ul>
  </section>
);

