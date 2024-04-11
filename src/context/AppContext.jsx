import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans');

  useEffect(() => {
    const fonts = ['sans', 'serif', 'mono'];

    fonts.forEach((item) => document.body.classList.remove(`font-${item}`));

    fonts.forEach((item) => {
      if (font === item) {
        document.body.classList.add(`font-${item}`);
      }
    });
  }, [font]);

  return <FontContext.Provider value={{ setFont }}>{children}</FontContext.Provider>;
};

FontProvider.propTypes = {
  children: PropTypes.node.isRequired
};
