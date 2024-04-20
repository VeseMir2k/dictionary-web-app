import PropTypes from 'prop-types';

const Phonetic = ({ phoneticText }) => {
  return <p className="col-start-1 col-end-2 row-start-2 row-end-3">{phoneticText}</p>;
};

Phonetic.propTypes = {
  phoneticText: PropTypes.string.isRequired
};

export default Phonetic;
