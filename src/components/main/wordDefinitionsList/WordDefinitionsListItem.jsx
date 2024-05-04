import PropTypes from 'prop-types';

const WordDefinitionsListItem = ({ wordDefinition }) => {
  const { definition, example } = wordDefinition;
  return (
    <li className="before:content mb-[13px] flex text-bodyMobileM text-textColorPrimary before:mr-[20px] before:mt-[9px] before:size-[5px] before:rounded-[50%] before:bg-purple before:pl-[5px] last-of-type:mb-0 md:text-bodyM">
      <div className="flex flex-col">
        <p className="dark:text-white">{definition}</p>
        {example && <p className="mt-[13px] text-textColorSecondary">{example}</p>}
      </div>
    </li>
  );
};

WordDefinitionsListItem.propTypes = {
  wordDefinition: PropTypes.object.isRequired
};

export default WordDefinitionsListItem;
