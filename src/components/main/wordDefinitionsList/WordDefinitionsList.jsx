import PropTypes from 'prop-types';
import WordNounDefinitionsListItem from './WordDefinitionsListItem';

const WordDefinitionsList = ({ definitions }) => {
  const definitionItems = definitions.map((item, index) => (
    <WordNounDefinitionsListItem key={index} definition={item} />
  ));

  return <ul className="list-inside list-disc">{definitionItems}</ul>;
};

WordDefinitionsList.propTypes = {
  definitions: PropTypes.array.isRequired
};

export default WordDefinitionsList;
