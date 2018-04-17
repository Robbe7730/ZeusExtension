chrome.omnibox.onInputEntered.addListener(
  function(text) {
    const newURL = 'https://zeus.ugent.be/' + text;
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, {url: newURL});
    });
  });
