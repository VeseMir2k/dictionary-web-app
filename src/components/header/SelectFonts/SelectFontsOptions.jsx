import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FontContext } from '../../../context/AppContext';

const SelectFontsOptions = ({ isShow }) => {
  const { setFont } = useContext(FontContext);

  const options = [
    { id: 'sans', text: 'Sans Serif', class: 'font-sans' },
    { id: 'serif', text: 'Serif', class: 'font-serif' },
    { id: 'mono', text: 'Mono', class: 'font-mono' }
  ];

  // const setShowActive = (event) => {
  //   event.stopPropagation();
  //   setIsShow(true);
  // };

  const handleOption = (font) => {
    setFont(font);
  };

  const optionsList = options.map((option) => (
    <li
      onClick={() => handleOption(option.id)}
      key={option.id}
      className={`${option.class} hover:text-purple cursor-pointer`}>
      {option.text}
    </li>
  ));

  const showOptionsClass = isShow ? 'block' : 'hidden';

  return (
    <ul
      // onClick={(event) => setShowActive(event)}
      className={`${showOptionsClass} absolute right-0 top-[30px] z-20 w-[120px] rounded-[16px] bg-white p-[16px] text-[14px] leading-[24px] shadow-[5px_0_30px_0_rgba(0,0,0,0.1)]`}>
      {optionsList}
    </ul>
  );
};

SelectFontsOptions.propTypes = {
  isShow: PropTypes.bool.isRequired,
  setIsShow: PropTypes.func.isRequired
};

export default SelectFontsOptions;
