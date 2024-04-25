import PropTypes from 'prop-types';
import WordNounDefinitionsListItem from './WordDefinitionsListItem';

const WordDefinitionsList = ({ wordDefinitions }) => {
  const wordDefinitionItems = wordDefinitions.map((item, index) => (
    <WordNounDefinitionsListItem key={index} wordDefinition={item} />
  ));

  return <ul className="list-inside list-disc">{wordDefinitionItems}</ul>;
};

WordDefinitionsList.propTypes = {
  wordDefinitions: PropTypes.array.isRequired
};

export default WordDefinitionsList;
