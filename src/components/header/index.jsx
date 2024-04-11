import Logo from './Logo';
import Search from './Search';
import SelectFonts from './SelectFonts';
import SwitchTheme from './SwitchTheme';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-end">
        <Logo />
        <SelectFonts />
        <VerticalDivider />
        <SwitchTheme />
      </div>
      <Search />
    </header>
  );
};

export default Header;
