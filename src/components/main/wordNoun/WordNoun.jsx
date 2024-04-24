import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';
import MeaningTitle from '../MeaningTitle';
import SectionTitle from '../sectionTitle';
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
      const nounDefinitions = noun[0].definitions.map((item, index) => (
        <li
          key={index}
          className="before:content mb-[13px] flex text-textColorPrimary before:mr-[20px] before:mt-[9px] before:size-[5px] before:rounded-[50%] before:bg-purple before:pl-[5px] last-of-type:mb-0">
          <p className="text-bodyMobileM dark:text-white">{item.definition}</p>
        </li>
      ));
      setDefinitions(nounDefinitions);

      const nounSynonyms = noun[0].synonyms.map((item) => item);
      setSynonyms(nounSynonyms);
    }
  }, [apiResults]);

  return (
    definitions.length > 0 && (
      <section>
        <SectionTitle title="noun" />
        <MeaningTitle />
        <ul className="list-inside list-disc">{definitions}</ul>
        {synonyms.length > 0 && <WordNounSynonyms synonyms={synonyms} />}
      </section>
    )
  );
};

export default WordNoun;
