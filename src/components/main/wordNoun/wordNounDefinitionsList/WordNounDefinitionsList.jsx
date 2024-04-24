import PropTypes from 'prop-types';
import WordNounDefinitionsListItem from './WordNounDefinitionsListItem';

const WordNounDefinitionsList = ({ definitions }) => {
  const definitionItems = definitions.map((item, index) => (
    <WordNounDefinitionsListItem key={index} definition={item} />
  ));

  return <ul className="list-inside list-disc">{definitionItems}</ul>;
};

WordNounDefinitionsList.propTypes = {
  definitions: PropTypes.array.isRequired
};

export default WordNounDefinitionsList;
