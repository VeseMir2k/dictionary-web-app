import PropTypes from 'prop-types';

const WordNounSynonyms = ({ synonyms }) => {
  return (
    <div className="flex">
      <div className="mr-[24px]">Synonyms</div>
      <div className="">{synonyms}</div>
    </div>
  );
};

WordNounSynonyms.propTypes = {
  synonyms: PropTypes.array.isRequired
};

export default WordNounSynonyms;
