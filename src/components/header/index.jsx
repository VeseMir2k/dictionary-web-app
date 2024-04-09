import Logo from './Logo';
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
    </header>
  );
};

export default Header;
