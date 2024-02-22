const capitalizedWord = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export default capitalizedWord;
