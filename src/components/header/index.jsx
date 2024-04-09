import Logo from './Logo';
import SelectFonts from './SelectFonts';

const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <SelectFonts />
    </header>
  );
};

export default Header;
