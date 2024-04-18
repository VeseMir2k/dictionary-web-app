import PropTypes from 'prop-types';

const Phonetic = ({ phonetics }) => {
  const phonetic = phonetics.filter((item) => item.text.length > 0 && item.audio.length > 0);

  return <>{phonetic[0].text}</>;
};

Phonetic.propTypes = {
  phonetics: PropTypes.array.isRequired
};

export default Phonetic;
