import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const Title = () => {
  const { apiResults } = useContext(SearchContext);

  return <h1 className="mb-[8px] mt-[24px] text-headingMobileL">{}</h1>;
};

export default Title;
