import PropTypes from 'prop-types';
import randomColor from 'utils/randomColor';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import cssSection from 'components/Section/Section.module.css';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={[cssSection.section, css.statistics].join(' ')}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: randomColor() }}
            >
              <StatisticsItem label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
