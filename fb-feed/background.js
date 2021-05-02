console.log("background running");

var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?twitter\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
  console.log("I received the following DOM content:\n" + domContent);
}

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // console.log("button clicked");
  // var msg = {
  //   message: "user clicked!",
  // };
  // chrome.tabs.sendMessage(tab.id, msg);

  if (urlRegex.test(tab.url)) {
    // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
  }
}
