//API CALLS
const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('word', async (data) => {
    const response = await fetch(API + data.word);
    const result = await response.json();
    let definitionText = '';
    definitionText = result[0].meanings[0].definitions[0].definition;
    console.log(definitionText);
  });
});
