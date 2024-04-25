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
    console.log(item);
    return <WordSourcesUrl key={index} url={item} />;
  });

  return (
    <section className="flex flex-col text-bodyS">
      <h4 className="mb-[8px] text-textColorSecondary underline">Source</h4>
      {urls}
    </section>
  );
};

export default WordSources;
