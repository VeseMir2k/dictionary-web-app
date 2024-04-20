import LogoSvg from './LogoSvg';
import Search from './search/Search';
import SelectFonts from './selectFonts/SelectFonts';
import ThemeSwitch from './ThemeSwitch';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-end">
        <LogoSvg />
        <SelectFonts />
        <VerticalDivider />
        <ThemeSwitch />
      </div>
      <Search />
    </header>
  );
};

export default Header;
