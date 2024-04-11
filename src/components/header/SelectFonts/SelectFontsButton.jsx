import PropTypes from 'prop-types';

const SelectFontsButton = ({ setIsShow }) => {
  const toggleShow = (event) => {
    event.stopPropagation();
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <button className="flex text-[14px] font-bold" onClick={(event) => toggleShow(event)}>
      Sans Serif
      <img className="ml-[16px] w-[12px]" src="./icon-arrow-down.svg" alt="icon arrow down" />
    </button>
  );
};

SelectFontsButton.propTypes = {
  setIsShow: PropTypes.func.isRequired
};

export default SelectFontsButton;
