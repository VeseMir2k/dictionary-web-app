import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const SearchInput = () => {
  const { valueInput, getValueInput } = useContext(SearchContext);

  return (
    <input
      value={valueInput}
      placeholder="Keyboard"
      onChange={(event) => getValueInput(event)}
      className="dark:bg-backgroundSecondaryDark bg-backgroundSecondary min-w-full rounded-[15px] border-[1.5px] border-transparent px-[24px] py-[14px] text-[16px] font-bold leading-[20px] focus:border-[1.5px] focus:border-purple focus:outline-none dark:text-white"
      type="text"
    />
  );
};

export default SearchInput;
