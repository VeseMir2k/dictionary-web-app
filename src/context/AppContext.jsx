import PropTypes from 'prop-types';
import { createContext, useCallback, useEffect, useState } from 'react';
import { addClass, removeClass, setNameFontButton } from '../util';
export const FontContext = createContext();
export const ThemeContext = createContext();
export const SearchContext = createContext();

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
  const [valueInput, setValueInput] = useState('keyboard');
  const [valueSearch, setValueSearch] = useState(valueInput);
  const [apiResults, setApiResults] = useState([]);
  const [isApiResults, setIsApiResults] = useState(true);

  const getValueInput = (event) => {
    setValueInput(event.target.value);
  };

  const fetchData = useCallback(async () => {
    if (valueInput.length !== 0) {
      removeClass(document.querySelector('.search-input'), 'error');
      addClass(document.querySelector('.error-message'), 'hidden');

      try {
        const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${valueSearch}`);
        if (!data.ok) {
          throw new Error('Error');
        }
        const json = await data.json();
        setApiResults(json);
      } catch (error) {
        console.error('Error message:', error);
      }
    } else {
      addClass(document.querySelector('.search-input'), 'error');
      removeClass(document.querySelector('.error-message'), 'hidden');
    }
  }, [valueSearch]);

  const handleEnterKeyDown =
    ((event) => {
      if (event.key === 'Enter') {
        setValueSearch(valueInput);
      }
    },
    [valueInput]);

  const handleButton = () => {
    setValueSearch(valueInput);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener('keydown', handleEnterKeyDown);
    return () => window.removeEventListener('keydown', handleEnterKeyDown);
  }, [handleEnterKeyDown]);

  return (
    <SearchContext.Provider value={{ handleButton, valueInput, getValueInput, apiResults }}>
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
