import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';
import WordAudio from './WordAudio';
import WordPhonetic from './WordPhonetic';
import WordTitle from './WordTitle';

const WordHeader = () => {
  const { apiResults } = useContext(SearchContext);

  const phonetic = apiResults[0].phonetics.filter(
    (item) => item.text !== undefined && item.text.length > 0 && item.audio.length > 0
  );

  return (
    <div className="mt-[24px] grid">
      <WordTitle title={apiResults[0].word} />
      {!phonetic.length || (
        <>
          <WordPhonetic phoneticText={phonetic[0].text} />
          <WordAudio phoneticAudio={phonetic[0].audio} />
        </>
      )}
    </div>
  );
};

export default WordHeader;
