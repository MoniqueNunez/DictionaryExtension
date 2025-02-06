// API CALLS
const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('word', async (data) => {
    console.log('Highlighted word: ' + data.word);
    const response = await fetch(API + data.word);
    const result = await response.json();

    let definitionText = 'Highlight a word to get its definition!';

    if (Array.isArray(result) && result.length > 0) {
      definitionText = '';

      result[0].meanings.forEach((meaning) => {
        definitionText += `(${meaning.partOfSpeech})\n`;
        meaning.definitions.forEach((def, index) => {
          definitionText += `${index + 1}. ${def.definition}\n`;
        });
        definitionText += '\n';
      });
    }

    document.getElementById('definition').textContent = definitionText;
  });
});
