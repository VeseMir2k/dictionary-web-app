import { useEffect, useState } from 'react';

const SelectFonts = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = (event) => {
    event.stopPropagation();
    setIsShow((prevIsShow) => !prevIsShow);
  };

  const setShowActive = (event) => {
    event.stopPropagation();
    setIsShow(true);
  };

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setIsShow(false);
    });
  });

  const showOptionsClass = isShow || 'hidden';

  return (
    <div className="relative">
      <button className="flex text-[14px] font-bold" onClick={(event) => toggleShow(event)}>
        Sans Serif
        <img className="ml-[16px] w-[12px]" src="./icon-arrow-down.svg" alt="icon arrow down" />
      </button>
      <ul
        onClick={() => setShowActive(event)}
        className={`${showOptionsClass} absolute right-0 top-[30px] z-20 w-[120px] rounded-[16px] bg-white p-[16px] text-[14px] leading-[24px] shadow-[5px_0_30px_0_rgba(0,0,0,0.1)]`}>
        <li className="font-sans">Sans Serif</li>
        <li className="font-serif">Serif</li>
        <li className="font-mono">Mono</li>
      </ul>
    </div>
  );
};

export default SelectFonts;
