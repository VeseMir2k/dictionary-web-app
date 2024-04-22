import PropTypes from 'prop-types';
import SectionDivider from './SectionDivider';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex">
      <h2>{title}</h2>
      <SectionDivider />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
