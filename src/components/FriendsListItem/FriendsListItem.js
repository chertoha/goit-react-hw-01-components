import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={['status', isOnline ? 'isOnline' : ''].join(' ')}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;
