import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { addActiveClass, removeActivClass, removeFontClass, setFontClass } from '../util';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans');

  useEffect(() => {
    const fonts = ['sans', 'serif', 'mono'];

    fonts.forEach((item) => {
      const optionFontElement = document.querySelector(`.${item}`);

      removeFontClass(`font-${item}`);
      removeActivClass(optionFontElement);
    });

    fonts.forEach((item) => {
      if (font === item) {
        const optionFontElement = document.querySelector(`.${item}`);

        setFontClass(`font-${item}`);
        addActiveClass(optionFontElement);
      }
    });
  }, [font]);

  return <FontContext.Provider value={{ setFont }}>{children}</FontContext.Provider>;
};

export const AppProvider = ({ children }) => {
  return <FontProvider>{children}</FontProvider>;
};

FontProvider.propTypes = {
  children: PropTypes.node.isRequired
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
