import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';
import WordSourcesUrl from './WordSourcesUrl';

const WordSources = () => {
  const { apiResults } = useContext(SearchContext);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const sourcesUrls = apiResults[0].sourceUrls.map((item) => item);
    setSources(sourcesUrls);
  }, [apiResults]);

  const urls = sources.map((item, index) => {
    return <WordSourcesUrl key={index} url={item} />;
  });

  return (
    <section className="flex flex-col text-bodyS md:flex-row md:text-bodyS">
      <h4 className="mb-[8px] text-textColorSecondary underline md:m-0 md:mr-[20px]">Source</h4>
      {urls}
    </section>
  );
};

export default WordSources;
