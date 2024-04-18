import { useContext } from 'react';
import { SearchContext } from '../../context/AppContext';
import Heading from './heading/Heading';

const Main = () => {
  const { apiResults } = useContext(SearchContext);

  return (
    !apiResults.length || (
      <main>
        <Heading />
      </main>
    )
  );
};

export default Main;
