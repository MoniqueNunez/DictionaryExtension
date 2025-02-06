document.addEventListener('mouseup', async () => {
  let selectedWord = window.getSelection().toString().trim();
  if (selectedWord.length > 0) {
    chrome.storage.local.set({ word: selectedWord });
  }
});
