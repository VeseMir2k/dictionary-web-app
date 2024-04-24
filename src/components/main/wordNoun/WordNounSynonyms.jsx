import PropTypes from 'prop-types';

const WordNounSynonyms = ({ synonyms }) => {
  return (
    <div className="mt-[24px] flex text-headingMobileS text-textColorSecondary">
      <div className="mr-[24px]">Synonyms</div>
      <div className="font-bold text-purple">{synonyms}</div>
    </div>
  );
};

WordNounSynonyms.propTypes = {
  synonyms: PropTypes.array.isRequired
};

export default WordNounSynonyms;
