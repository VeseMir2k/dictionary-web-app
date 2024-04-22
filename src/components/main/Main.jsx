import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import WordHeader from './wordHeader';

const Main = () => {
  const { apiResults } = useContext(SearchContext);

  return (
    !apiResults.length || (
      <main>
        <WordHeader />
      </main>
    )
  );
};

export default Main;
