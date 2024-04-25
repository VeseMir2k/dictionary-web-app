import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const WordSourcesUrl = ({ url }) => {
  return (
    <div className="mb-[6px]">
      <a
        href={url}
        className="text-textColorPrimary underline last-of-type:mb-0 hover:text-purple dark:text-white">
        {url}
        <FontAwesomeIcon
          className="ml-[10px] text-[12px] text-textColorSecondary"
          icon={faUpRightFromSquare}
        />
      </a>
    </div>
  );
};

WordSourcesUrl.propTypes = {
  url: PropTypes.string.isRequired
};

export default WordSourcesUrl;
