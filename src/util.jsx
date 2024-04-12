export const addActiveClass = (element) => {
  element.classList.add('active');
};

export const removeActivClass = (element) => {
  element.classList.remove('active');
};

export const setFontClass = (fontClass) => {
  document.body.classList.add(fontClass);
};

export const removeFontClass = (fontClass) => {
  document.body.classList.remove(fontClass);
};

export const setNameFontButton = (element, fontName) => {
  element.textContent = fontName;
};
