import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import WordHeader from './wordHeader';
import WordNoun from './wordNoun';

const Main = () => {
  const { apiResults } = useContext(SearchContext);

  return (
    !apiResults.length || (
      <main>
        <WordHeader />
        <WordNoun />
      </main>
    )
  );
};

export default Main;
