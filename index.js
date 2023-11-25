class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string) {
    const words = string.split(' ');
    const nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    const CapitalizedWords = words.map((word, index) => {
     if (index === 0 || !nonCapitalizedWords.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  })
return CapitalizedWords.join(' ');
  
  }
}
