import Logo from './Logo';
import Search from './search/Search';
import SelectFonts from './SelectFonts/SelectFonts';
import ThemeSwitch from './ThemeSwitch';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-end">
        <Logo />
        <SelectFonts />
        <VerticalDivider />
        <ThemeSwitch />
      </div>
      <Search />
    </header>
  );
};

export default Header;
