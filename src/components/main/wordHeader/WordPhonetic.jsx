import PropTypes from 'prop-types';

const WordPhonetic = ({ phoneticText }) => {
  return (
    <p className="col-start-1 col-end-2 row-start-2 row-end-3 font-sans text-bodyM text-purple">
      {phoneticText}
    </p>
  );
};

WordPhonetic.propTypes = {
  phoneticText: PropTypes.string.isRequired
};

export default WordPhonetic;
