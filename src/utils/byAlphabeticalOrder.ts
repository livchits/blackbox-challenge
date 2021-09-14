function byAlphabeticalOrder(word: string, nextWord: string): number {
  return word.localeCompare(nextWord);
}

export default byAlphabeticalOrder;
