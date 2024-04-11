import { useEffect, useState } from 'react';
import SelectFontsButton from './SelectFontsButton';
import SelectFontsOptions from './SelectFontsOptions';

const SelectFonts = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setIsShow(false);
    });
  });

  return (
    <div className="relative">
      <SelectFontsButton setIsShow={setIsShow} />
      <SelectFontsOptions isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default SelectFonts;
