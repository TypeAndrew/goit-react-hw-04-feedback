import PropTypes from 'prop-types';

export function Notification(props) {

  const { message } = props;
  return(<div>{message}</div>)
  
}

Notification.propTypes = {
  message: PropTypes.string,
  
};