import PropTypes from 'prop-types';
import randomColor from 'utils/randomColor';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import { Title, List, ListItem, Wrapper } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} bgdColor={randomColor()}>
              <StatisticsItem label={label} percentage={percentage} />
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
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
