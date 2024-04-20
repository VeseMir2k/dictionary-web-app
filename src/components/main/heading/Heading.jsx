import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';
import Audio from './Audio';
import Phonetic from './Phonetic';
import Title from './Title';

const Heading = () => {
  const { apiResults } = useContext(SearchContext);

  const phonetic = apiResults[0].phonetics.filter(
    (item) => item.text !== undefined && item.text.length > 0 && item.audio.length > 0
  );

  return (
    <div className="mt-[24px] grid">
      <Title title={apiResults[0].word} />
      {!phonetic.length || (
        <>
          <Phonetic phoneticText={phonetic[0].text} />
          <Audio phoneticAudio={phonetic[0].audio} />
        </>
      )}
    </div>
  );
};

export default Heading;
