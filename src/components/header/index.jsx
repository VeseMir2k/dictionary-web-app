import Logo from './Logo';
import Search from './Search';
import SelectFonts from './SelectFonts';
import SwitchTheme from './SwitchTheme';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <SelectFonts />
      <VerticalDivider />
      <SwitchTheme />
      <Search />
    </header>
  );
};

export default Header;
