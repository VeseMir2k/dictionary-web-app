import { useEffect, useState } from 'react';
import SelectFontButton from './SelectFontButton';
import SelectFontOptions from './SelectFontOptions';

const SelectFont = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setIsShow(false);
    });
  });

  return (
    <div className="relative">
      <SelectFontButton setIsShow={setIsShow} />
      <SelectFontOptions isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default SelectFont;
