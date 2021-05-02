console.log("background running");

//looks for browser action. Ch ext runs on it.
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {

//knows the tab you are on
  console.log("button clicked");
  var msg = {
    message: "user clicked!",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
