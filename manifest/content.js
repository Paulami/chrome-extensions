// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
    let paragraphs = document.getElementsByTagName("a");
    for (elt of paragraphs) {
      elt.style["color"] = "#e3b063";
      elt.style["background-color"] = "#050505";
      //   elt.style["padding"] = "0.5   rem";
    }
    let spans = document.getElementsByTagName("span");
    for (elt of spans) {
      elt.style["color"] = "#e3b063";
      elt.style["background-color"] = "#050505";
      //   elt.style["padding"] = "0";
    }
  }
}
