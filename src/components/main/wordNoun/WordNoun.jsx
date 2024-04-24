import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/AppContext';
import MeaningTitle from '../MeaningTitle';
import SectionTitle from '../sectionTitle';

const WordNoun = () => {
  const { apiResults } = useContext(SearchContext);
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const noun = apiResults[0].meanings.filter((item) => item.partOfSpeech === 'noun');

    setDefinitions([]);

    if (noun.length > 0) {
      const nounDefinitions = noun[0].definitions.map((item, index) => (
        <li
          key={index}
          className="before:content mb-[13px] flex text-textColorPrimary before:mr-[20px] before:mt-[9px] before:size-[5px] before:rounded-[50%] before:bg-purple before:pl-[5px]">
          <p className="text-bodyMobileM">{item.definition}</p>
        </li>
      ));
      setDefinitions(nounDefinitions);
    }
  }, [apiResults]);

  return (
    definitions || (
      <section>
        <SectionTitle title="noun" />
        <MeaningTitle />
        <ul className="list-inside list-disc">{definitions}</ul>
      </section>
    )
  );
};

export default WordNoun;
