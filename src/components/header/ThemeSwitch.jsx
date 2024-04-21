import { useContext } from 'react';
import { ThemeContext } from '../../context/AppContext';
import SearchMoonSvg from './search/SearchMoonSvg';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleButton = () => {
    toggleTheme();
  };

  return (
    <div className="flex">
      <div
        onClick={handleButton}
        className="before:content relative h-[20px] w-[40px] cursor-pointer rounded-[50px] bg-[#757575] before:absolute before:left-[3px] before:right-auto  before:top-[3px] before:h-[14px] before:w-[14px] before:rounded-[50%] before:bg-white  dark:bg-purple dark:before:left-auto dark:before:right-[3px]"></div>
      <SearchMoonSvg />
    </div>
  );
};

export default ThemeSwitch;
