import PropTypes from 'prop-types';
import SectionDivider from './SectionDivider';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center">
      <h2 className="text-[18px] font-bold italic text-textColorPrimary dark:text-white">
        {title}
      </h2>
      <SectionDivider />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle;
