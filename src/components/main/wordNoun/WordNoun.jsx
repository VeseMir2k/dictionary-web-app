import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';
import MeaningTitle from '../MeaningTitle';
import SectionTitle from '../sectionTitle';
import WordDefinitionsList from '../wordDefinitionsList/WordDefinitionsList';
import WordNounSynonyms from './WordNounSynonyms';

const WordNoun = () => {
  const { apiResults } = useContext(SearchContext);
  const [definitions, setDefinitions] = useState([]);
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    const noun = apiResults[0].meanings.filter((item) => item.partOfSpeech === 'noun');
    setDefinitions([]);
    setSynonyms([]);

    if (noun.length > 0) {
      const nounDefinitions = noun[0].definitions.map((item) => item);
      setDefinitions(nounDefinitions);

      const nounSynonyms = noun[0].synonyms.map((item) => item);
      setSynonyms(nounSynonyms);
    }
  }, [apiResults]);

  return (
    definitions.length > 0 && (
      <section className="pb-[32px]">
        <SectionTitle title="noun" />
        <MeaningTitle />
        <WordDefinitionsList wordDefinitions={definitions} />
        {synonyms.length > 0 && <WordNounSynonyms synonyms={synonyms} />}
      </section>
    )
  );
};

export default WordNoun;
