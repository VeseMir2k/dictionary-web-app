import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';
import SectionTitle from '../sectionTitle';

const WordNoun = () => {
  const { apiResults } = useContext(SearchContext);

  const noun = apiResults[0].meanings.filter((item) => item.partOfSpeech === 'noun');

  const definitions = noun[0].definitions.map((item, index) => (
    <li
      key={index}
      className="before:content mb-[13px] flex text-textColorPrimary before:mr-[20px] before:mt-[9px] before:size-[5px] before:bg-purple before:pl-[5px]">
      <p className="text-bodyMobileM">{item.definition}</p>
    </li>
  ));

  return (
    <section>
      <SectionTitle title="noun" />
      <ul className="list-inside list-disc">{definitions}</ul>
    </section>
  );
};

export default WordNoun;
