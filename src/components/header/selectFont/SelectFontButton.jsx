import PropTypes from 'prop-types';

const SelectFontsButton = ({ setIsShow }) => {
  const toggleShow = (event) => {
    event.stopPropagation();
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <button
      className="font-button flex text-[14px] font-bold md:text-[18px]"
      onClick={(event) => toggleShow(event)}>
      <span className="font-button__name dark:text-white">Sans Serif</span>
      <img className="ml-[16px] w-[12px]" src="./icon-arrow-down.svg" alt="icon arrow down" />
    </button>
  );
};

SelectFontsButton.propTypes = {
  setIsShow: PropTypes.func.isRequired
};

export default SelectFontsButton;
