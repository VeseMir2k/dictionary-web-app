import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
  addActiveClass,
  removeActivClass,
  removeFontClass,
  setFontClass,
  setNameFontButton
} from '../util';

export const FontContext = createContext();
export const ThemeContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans');

  useEffect(() => {
    const fonts = ['sans', 'serif', 'mono'];
    const fontsName = ['Sans Serif', 'Serif', 'Mono'];
    const fontButtonNameElement = document.querySelector('.font-button .font-button__name');

    fonts.forEach((item) => {
      const optionFontElement = document.querySelector(`.${item}`);

      removeFontClass(`font-${item}`);
      removeActivClass(optionFontElement);
    });

    fonts.forEach((item, index) => {
      if (font === item) {
        const optionFontElement = document.querySelector(`.${item}`);
        setNameFontButton(fontButtonNameElement, fontsName[index]);
        setFontClass(`font-${item}`);
        addActiveClass(optionFontElement);
      }
    });
  }, [font]);

  return <FontContext.Provider value={{ setFont }}>{children}</FontContext.Provider>;
};

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useState('light');

  useEffect(() => {
    // if (
    //   localStorage.theme === 'dark' ||
    //   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    // ) {
    //   document.documentElement.classList.add('dark');
    // } else {
    //   document.documentElement.classList.remove('dark');
    // }
    // localStorage.theme = 'light';
    // localStorage.theme = 'dark';
    // localStorage.removeItem('theme');
  }, []);

  return <ThemeContext.Provider value={(theme, setTheme)}>{children}</ThemeContext.Provider>;
};

export const AppProvider = ({ children }) => {
  return (
    <FontProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FontProvider>
  );
};

FontProvider.propTypes = {
  children: PropTypes.node.isRequired
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
