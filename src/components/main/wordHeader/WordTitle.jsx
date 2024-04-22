import PropTypes from 'prop-types';

const WordTitle = ({ title }) => {
  return (
    <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 mb-[8px] text-headingMobileL dark:text-white">
      {title}
    </h1>
  );
};

WordTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default WordTitle;
