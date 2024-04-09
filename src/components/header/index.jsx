import Logo from './Logo';
import SelectFonts from './SelectFonts';
import VerticalDivider from './VerticalDivider';

const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <SelectFonts />
      <VerticalDivider />
    </header>
  );
};

export default Header;
