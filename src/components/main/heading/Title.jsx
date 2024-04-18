import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h1 className="mb-[8px] mt-[24px] text-headingMobileL">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
