// background.js

// This script runs in the background and has access to the chrome.runtime API

// Listen for clicks on the extension button
chrome.browserAction.onClicked.addListener(() => {
    // Send a message to the content script
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, 'button_clicked');
    });
  });
  