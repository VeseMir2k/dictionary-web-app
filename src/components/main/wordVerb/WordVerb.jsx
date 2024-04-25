import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';
import MeaningTitle from '../MeaningTitle';
import SectionTitle from '../sectionTitle';
import WordDefinitionsList from '../wordDefinitionsList/WordDefinitionsList';

const WordVerb = () => {
  const { apiResults } = useContext(SearchContext);
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const verb = apiResults[0].meanings.filter((item) => item.partOfSpeech === 'verb');
    setDefinitions([]);

    if (verb.length > 0) {
      const verbDefinitions = verb[0].definitions.map((item) => item);
      setDefinitions(verbDefinitions);
    }
  }, [apiResults]);

  return (
    definitions.length > 0 && (
      <section>
        <SectionTitle title="verb" />
        <MeaningTitle />
        <WordDefinitionsList wordDefinitions={definitions} />
      </section>
    )
  );
};

export default WordVerb;
