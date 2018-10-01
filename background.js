chrome.omnibox.onInputEntered.addListener(
  function(text) {
    const newURL = `https://${text}.zeus.gent/`;
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, {url: newURL});
    });
  });
