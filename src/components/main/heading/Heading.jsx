import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';
import Phonetic from './Phonetic';
import Title from './Title';

const Heading = () => {
  const { apiResults } = useContext(SearchContext);

  return (
    !apiResults.length || (
      <>
        <Title title={apiResults[0].word} />
        <Phonetic phonetics={apiResults[0].phonetics} />
      </>
    )
  );
};

export default Heading;
