import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';

const WordSources = () => {
  const { apiResults } = useContext(SearchContext);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const sourcesUrls = apiResults[0].sourceUrls.map((item) => item);
    setSources(sourcesUrls);
  }, [apiResults]);

  return (
    <section className="text-bodyS">
      <h4 className="mb-[8px] text-textColorSecondary">Source</h4>
      <a href={sources} className="mb-[5px] text-textColorPrimary">
        {sources}
      </a>
    </section>
  );
};

export default WordSources;
