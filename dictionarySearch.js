//API CALLS
const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('word', async (data) => {
    console.log('highlighted ' + data.word);
    const response = await fetch(API + data.word);
    const result = await response.json();
    let definitionText = 'Highlight a word to get its definition!';
    let word = '';
    if (Array.isArray(result) && result[0].meanings.length > 0) {
      definitionText = result[0].meanings[0].definitions[0].definition;
      //word = FILL IN THIS
    }
    document.getElementById('word').textContent = word; //ADD WORD TO THIS
    document.getElementById('definition').textContent = definitionText;
  });
});
