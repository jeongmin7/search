const highlightText = (text: string, searchTerm: string) => {
  const isMatchedTextRegExp = new RegExp(searchTerm, 'g');
  return text.replace(isMatchedTextRegExp, `<strong>${searchTerm}</strong>`);
};

export default highlightText;
