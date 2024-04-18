import PropTypes from 'prop-types';

const Audio = ({ phoneticAudio }) => {
  return <audio controls="controls" src={phoneticAudio} />;
};

Audio.propTypes = {
  phoneticAudio: PropTypes.string.isRequired
};

export default Audio;
