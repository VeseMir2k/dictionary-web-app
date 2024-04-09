import { useState } from 'react';

const SelectFonts = () => {
  const [isShow, setIsShow] = useState(false);

  const showOptions = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  const showOptionsClass = isShow || 'hidden';

  return (
    <div className="custom-select">
      <button className="flex" onClick={showOptions}>
        Sans Serif <img src="./icon-arrow-down.svg" alt="icon arrow down" />
      </button>
      <ul className={`${showOptionsClass}`}>
        <li>Sans Serif</li>
        <li>Serif</li>
        <li>Mono</li>
      </ul>
    </div>
  );
};

export default SelectFonts;
