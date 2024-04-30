import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const SearchInput = () => {
  const { valueInput, getValueInput } = useContext(SearchContext);

  return (
    <div className="relative">
      <input
        value={valueInput}
        placeholder="Search for any word…"
        onChange={(event) => getValueInput(event)}
        className="search-input min-w-full rounded-[15px] border-[1.5px] border-transparent bg-backgroundSecondary px-[24px] py-[14px] text-[16px] font-bold leading-[20px] focus:border-[1.5px] focus:border-purple focus:outline-none md:py-[22px] md:text-[20px] dark:bg-backgroundSecondaryDark dark:text-white"
        type="text"
      />
      <span className="error-message absolute bottom-[-21px] left-[5px] hidden text-[14px] text-error">
        Whoops, can’t be empty…
      </span>
    </div>
  );
};

export default SearchInput;
