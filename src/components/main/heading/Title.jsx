import { useContext } from 'react';
import { SearchContext } from '../../../context/AppContext';

const Title = () => {
  const { apiResults } = useContext(SearchContext);

  const title = apiResults == [] ? 'pip' : 'dsa';

  return <h1 className="mb-[8px] mt-[24px] text-headingMobileL">{title}</h1>;
};

export default Title;
