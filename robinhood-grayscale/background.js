console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log("button clicked");
  var msg = {
    message: "user clicked!",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
