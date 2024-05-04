import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import HorizontalDivider from './HorizontalDivider';
import NotFound from './NotFound';
import WordHeader from './wordHeader';
import WordNoun from './wordNoun';
import WordSources from './wordSources';
import WordVerb from './wordVerb/WordVerb';

const Main = () => {
  const { isApiResults, apiResults } = useContext(SearchContext);

  return (
    <main className="md:w-[737px]">
      {isApiResults ? (
        !apiResults.length || (
          <>
            <WordHeader />
            <WordNoun />
            <WordVerb />
            <HorizontalDivider />
            <WordSources />
          </>
        )
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default Main;
