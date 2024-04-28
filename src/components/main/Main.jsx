import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import HorizontalDivider from './HorizontalDivider';
import WordHeader from './wordHeader';
import WordNoun from './wordNoun';
import WordSources from './wordSources';
import WordVerb from './wordVerb/WordVerb';

const Main = () => {
  const { isApiResults, apiResults } = useContext(SearchContext);

  return (
    <main>
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
        <>
          <p>error</p>
        </>
      )}
    </main>
  );
};

export default Main;
