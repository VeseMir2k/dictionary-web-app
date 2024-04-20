import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 mb-[8px] text-headingMobileL">
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
