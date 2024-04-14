export const setNameFontButton = (element, fontName) => {
  element.textContent = fontName;
};

export const addClass = (element, nameClass) => {
  element.classList.add(nameClass);
};

export const removeClass = (element, nameClass) => {
  element.classList.remove(nameClass);
};
