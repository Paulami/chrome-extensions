// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  let paragraphs = document.getElementsByTagName("p");
  for (elt of paragraphs) {
    // elt.style["filter"] = "grayscale(1)";
    console.log(elt);
  }
}

window.onload = () => {
  console.log("This Script is running");

  var she = document.getElementsByTagName("*");

  for (var i = 0; i < she.length; i++) {
    var element = she[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bshe is\b/gi, "they are");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var capshe = document.getElementsByTagName("*");

  for (var i = 0; i < capshe.length; i++) {
    var element = capshe[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bshe was\b/gi, "they were");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var apshe = document.getElementsByTagName("*");

  for (var i = 0; i < apshe.length; i++) {
    var element = apshe[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bshe's\b/gi, "they're");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var her = document.getElementsByTagName("*");

  for (var i = 0; i < her.length; i++) {
    var element = her[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bher\b/gi, "them");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var he = document.getElementsByTagName("*");

  for (var i = 0; i < he.length; i++) {
    var element = he[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bhe is\b/gi, "they are");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var caphe = document.getElementsByTagName("*");

  for (var i = 0; i < caphe.length; i++) {
    var element = caphe[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bhe was\b/gi, "they were");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var aphe = document.getElementsByTagName("*");

  for (var i = 0; i < aphe.length; i++) {
    var element = aphe[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\bhe's\b/gi, "they're");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }

  var him = document.getElementsByTagName("*");

  for (var i = 0; i < him.length; i++) {
    var element = him[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/\him\b/gi, "them");

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
};
