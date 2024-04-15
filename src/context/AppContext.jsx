import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { addClass, removeClass, setNameFontButton } from '../util';

export const FontContext = createContext();
export const ThemeContext = createContext();
export const SearchContext = createContext();
export const ApiContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans');

  useEffect(() => {
    const fonts = ['sans', 'serif', 'mono'];
    const fontsName = ['Sans Serif', 'Serif', 'Mono'];
    const fontButtonNameElement = document.querySelector('.font-button .font-button__name');

    fonts.forEach((item) => {
      const optionFontElement = document.querySelector(`.${item}`);
      removeClass(document.body, `font-${item}`);
      removeClass(optionFontElement, 'active');
    });

    fonts.forEach((item, index) => {
      if (font === item) {
        const optionFontElement = document.querySelector(`.${item}`);
        setNameFontButton(fontButtonNameElement, fontsName[index]);
        addClass(document.body, `font-${item}`);
        addClass(optionFontElement, 'active');
      }
    });
  }, [font]);

  return <FontContext.Provider value={{ setFont }}>{children}</FontContext.Provider>;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDark) {
      addClass(document.body, 'dark');
    } else {
      removeClass(document.body, 'dark');
    }
  }, [isDark]);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const SearchProvider = ({ children }) => {
  const [valueInput, setValueInput] = useState('');
  const [apiResults, setApiResults] = useState('');

  const getValueInput = (event) => {
    setValueInput(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${valueInput !== '' || 'keyboard'}`
      );
      const json = await data.json();
      console.log(json);
      setApiResults(json);
    };

    fetchData();
  }, [valueInput]);

  return (
    <SearchContext.Provider value={{ valueInput, getValueInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <FontProvider>
      <ThemeProvider>
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </FontProvider>
  );
};

FontProvider.propTypes = {
  children: PropTypes.node.isRequired
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};