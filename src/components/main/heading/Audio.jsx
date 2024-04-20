import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Audio = ({ phoneticAudio }) => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay((prevState) => !prevState);
  };

  const handlePlayButton = () => {
    const audioElement = document.querySelector('.phonetic-audio');
    togglePlay();

    if (!isPlay) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  const handleAudioEnd = () => {
    togglePlay();
  };

  return (
    <>
      <audio
        className="phonetic-audio hidden"
        controls="controls"
        src={phoneticAudio}
        onEnded={handleAudioEnd}
      />
      <button
        className="col-start-2 col-end-3 row-start-1 row-end-3 flex h-[48px] w-[48px]  items-center justify-center self-center justify-self-end rounded-[50%] bg-purple"
        onClick={handlePlayButton}>
        <FontAwesomeIcon className="text-[17px]" icon={isPlay ? faStop : faPlay} />
      </button>
    </>
  );
};

Audio.propTypes = {
  phoneticAudio: PropTypes.string.isRequired
};

export default Audio;
