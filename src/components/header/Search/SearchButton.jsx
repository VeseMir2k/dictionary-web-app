import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const SearchButton = () => {
  const { handleButton } = useContext(SearchContext);

  return (
    <button
      onClick={handleButton}
      className="absolute bottom-0 right-0 top-0 flex rounded-[15px] pl-[24px] pr-[24px]">
      <img className="w-[16px]" src="./icon-search.svg" alt="" />
    </button>
  );
};

export default SearchButton;
