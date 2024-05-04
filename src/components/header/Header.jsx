import LogoSvg from './LogoSvg';
import Search from './Search';
import SelectFont from './selectFont/SelectFont';
import ThemeSwitch from './ThemeSwitch';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header className="md:w-[737px]">
      <div className="flex items-center justify-end">
        <LogoSvg />
        <SelectFont />
        <VerticalDivider />
        <ThemeSwitch />
      </div>
      <Search />
    </header>
  );
};

export default Header;
