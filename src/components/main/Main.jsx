import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import WordHeader from './wordHeader';
import WordNoun from './wordNoun';
import WordVerb from './wordVerb/WordVerb';

const Main = () => {
  const { apiResults } = useContext(SearchContext);

  return (
    !apiResults.length || (
      <main>
        <WordHeader />
        <WordNoun />
        <WordVerb />
      </main>
    )
  );
};

export default Main;
