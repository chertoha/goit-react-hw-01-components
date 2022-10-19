import PropTypes from 'prop-types';
import Item from './Item';

const ItemsList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(({ id, label, percentage }) => {
        return (
          <li key={id} className="item">
            <Item label={label} percentage={percentage} />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
