import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const SearchInput = () => {
  const { valueInput, getValueInput } = useContext(SearchContext);
  return (
    <input
      value={valueInput}
      placeholder="Keyboard"
      onChange={(event) => getValueInput(event)}
      className="min-w-full rounded-[15px] bg-[#f4f4f4] px-[24px] py-[14px] text-[16px] font-bold leading-[20px] focus:border-[1.5px] focus:border-purple focus:outline-none "
      type="text"
    />
  );
};

export default SearchInput;
