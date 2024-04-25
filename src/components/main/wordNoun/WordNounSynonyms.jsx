import PropTypes from 'prop-types';

const WordNounSynonyms = ({ synonyms }) => {
  const synonymsString = synonyms.join(' ');

  return (
    <div className="mt-[24px] flex text-headingMobileS text-textColorSecondary">
      <div className="mr-[24px]">Synonyms</div>
      <div className="font-bold text-purple">{synonymsString}</div>
    </div>
  );
};

WordNounSynonyms.propTypes = {
  synonyms: PropTypes.array.isRequired
};

export default WordNounSynonyms;
