import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FontContext } from '../../../context/AppContext';

const SelectFontsOptions = ({ isShow }) => {
  const { setFont } = useContext(FontContext);

  const options = [
    { id: 'sans', text: 'Sans Serif', class: 'sans font-sans' },
    { id: 'serif', text: 'Serif', class: 'serif font-serif' },
    { id: 'mono', text: 'Mono', class: 'mono font-mono' }
  ];

  const handleOption = (font) => {
    setFont(font);
  };

  const optionsList = options.map((option) => (
    <li
      onClick={() => handleOption(option.id)}
      key={option.id}
      className={`${option.class} cursor-pointer hover:text-purple`}>
      {option.text}
    </li>
  ));

  const showOptionsClass = isShow ? 'block' : 'hidden';

  return (
    <ul
      className={`${showOptionsClass} dark:bg-backgroundSecondaryDark absolute right-0 top-[30px] z-20 w-[120px] rounded-[16px] bg-white p-[16px] text-[14px] leading-[24px] shadow-[0_5px_30px_0_rgba(0,0,0,0.1)] dark:text-white dark:shadow-purple`}>
      {optionsList}
    </ul>
  );
};

SelectFontsOptions.propTypes = {
  isShow: PropTypes.bool.isRequired,
  setIsShow: PropTypes.func.isRequired
};

export default SelectFontsOptions;
