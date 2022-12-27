import PropTypes from 'prop-types';

export function Statistics(props) {
  
  
  const { good, bad, neutral, total, percetage } = props;
  return (
    <>
      <p>
        Good: {good}
      </p>  
      <p>
        Bad: {bad}
       </p>  
      <p>
        Neutral: {neutral}
       </p>  
      <p>
        Total: {total}
       </p>  
      <p>
        Percetage: {percetage} %
       </p>  
     </>   
   )
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  percetage: PropTypes.number,
};