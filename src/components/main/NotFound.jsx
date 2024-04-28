import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        className="mt-[50px] text-[64px] text-[#ffd500] text-textColorPrimary"
        icon={faFaceFrown}
      />
      <h3 className="mt-[30px] text-headingS font-bold dark:text-white">No Definitions Found</h3>
      <p className="mt-[20px] text-textColorSecondary">
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.
      </p>
    </div>
  );
};

export default NotFound;
