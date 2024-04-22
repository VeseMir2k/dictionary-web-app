import LogoSvg from './LogoSvg';
import Search from './search/Search';
import SelectFont from './selectFont/SelectFont';
import ThemeSwitch from './ThemeSwitch';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header>
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
