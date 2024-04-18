import PropTypes from 'prop-types';

const Phonetic = ({ phoneticText }) => {
  return <p>{phoneticText}</p>;
};

Phonetic.propTypes = {
  phoneticText: PropTypes.string.isRequired
};

export default Phonetic;
