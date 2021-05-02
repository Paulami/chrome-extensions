// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (msg.text === "report_back") {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    // sendResponse(document.all[0].outerHTML);
  }
}

function convert(number) {
  var base = parseFloat(number);
  if (number.toLowerCase().match(/k/)) {
    return Math.round(base * 1000);
  } else if (number.toLowerCase().match(/m/)) {
    return Math.round(base * 1000000);
  } else if (number.toLowerCase().match(/b/)) {
    return Math.round(base * 1000000000);
  }
}

window.onload = () => {
  console.log("This Script is running");

  setTimeout(function () {
    // let followers = document.querySelector(
    //   "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-1dbjc4n.r-vrmyzg > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
    // ).innerText;

    // let following = document.querySelector(
    //   "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
    // ).innerText;

    // if (followers && following) {
    //   followers = followers.replace(/,/g, ""); // 1,234 becomes 1234
    //   following = following.replace(/,/g, "");

    //   arr.push(followers);
    //   arr.push(following);
    //   console.log(arr);

    //   // let diff = (a, b) => {
    //   //   return Math.abs(a - b);
    //   // };
    //   // console.log(`the difference is ${diff(followers, following)}`);

    //   if (following / followers > 3) {
    //     const percentage = ((followers * 100) / following).toFixed(2);
    //     console.log(percentage);
    //     // alert(
    //     //   `Hey! This Person is only following ${percentage}% of the people that follow them. Be aware before reading their tweets`
    //     // );
    //     var x = document.getElementsByTagName("BODY")[0];
    //     let modal = document.createElement("div");
    //     let text = document.createElement("h4");
    //     text.innerHTML = `Hey! This Person is only following ${percentage}% of the people that follow them. Be aware before reading their tweets`;
    //     modal.appendChild(text);
    //     console.log(modal);
    //     modal.style.background = "white";
    //     modal.style.position = "fixed";
    //     modal.style.bottom = "0";
    //     modal.style.left = "0";
    //     modal.style.color = "red";
    //     modal.style.width = "100%";
    //     modal.style.padding = "1rem";
    //     modal.style.fontFamily = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;
    //     x.appendChild(modal);
    //   } else {
    //     // alert(`This Person is cool to follow`);
    //     var x = document.getElementsByTagName("BODY")[0];
    //     let modal = document.createElement("div");
    //     let text = document.createElement("h4");
    //     text.innerHTML = `This Person is cool to follow`;
    //     modal.appendChild(text);
    //     console.log(modal);
    //     modal.style.background = "white";
    //     modal.style.position = "fixed";
    //     modal.style.bottom = "0";
    //     modal.style.left = "0";
    //     modal.style.color = "blue";
    //     modal.style.width = "100%";
    //     modal.style.padding = "1rem";
    //     modal.style.fontFamily = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;
    //     x.appendChild(modal);
    //   }
    // }

    // Fetch the profile username
    // This is required to fetch the container to inject into
    var twitterUsername = new URL(document.URL).pathname.split("/")[1];

    // Get followers and following links
    var followersLinkRef = 'a[href="/' + twitterUsername + '/followers"]';
    var followingLinkRef = 'a[href="/' + twitterUsername + '/following"]';

    var followerCount = document.querySelector(followersLinkRef);
    var followingCount = document.querySelector(followingLinkRef);

    if (followerCount && followerCount) {
      console.log(twitterUsername);
      // These will provide you with follower and following count
      // TODO these are strings and have to be cleaned
      // There may be commas, truncation for thousands as "k", truncation for millions as "M"
      followerCount = followerCount.children[0].innerText;
      followingCount = followingCount.children[0].innerText;

      if (followingCount.includes("K")) {
        followingCount = followingCount.replace(/K/g, "00");
      }

      if (followerCount.includes("K")) {
        followerCount = followerCount.replace(/K/g, "00");
      }

      if (followingCount.includes("M")) {
        followingCount = followingCount.replace(/M/g, "00000");
      }

      if (followerCount.includes("M")) {
        followerCount = followerCount.replace(/M/g, "00000");
      }

      console.log(followingCount, followerCount);
      // if (followingCount.includes(".")) {
      //   followingCount.replace(/\./g, " ");
      // }

      // if (followerCount.includes(".")) {
      //   followerCount.replace(/\./g, " ");
      // }

      followingCount = followingCount.split(".").join("");
      followerCount = followerCount.split(".").join("");
      // followerCount = followerCount.replace(/./g, ""); // 1,234 becomes 1234mat
      // followingCount = followingCount.replace(/./g, ""); // 1,234 becomes 1234
      followerCount = followerCount.replace(/,/g, ""); // 1,234 becomes 1234mat
      followingCount = followingCount.replace(/,/g, ""); // 1,234 becomes 1234

      console.log(followingCount, followerCount);
      // Get the div to inject the content into
      var $parent = document.querySelector(followersLinkRef).offsetParent
        .offsetParent.offsetParent;

      if (followerCount / followingCount > 3) {
        var percentage = ((followingCount * 100) / followerCount).toFixed(2);

        // Edit below to display an appropriate message
        var infoContent = ` <b>@${twitterUsername}</b> follows only <b>${percentage}%</b> of people that follow them. Be aware before before reading their tweets`;

        // Dump dumped all the CSS into a string
        var infoStyle =
          "color: #263238; background: #1da1f2; border-radius: 4px; padding: 8px; margin: 16px 0px; font-family: sans-serif";
      } else {
        // Edit below to display an appropriate message
        var infoContent = `86% follower health based on sentiment and engagement analysis. <a href="paulami.in">Link to dashboard</a>`;

        // Dump dumped all the CSS into a string
        var infoStyle =
          "color: #263238; background: #1da1f2; border-radius: 4px; padding: 8px; margin: 20px 0px; font-family: sans-serif";
      }
      // Create a container for the content to be injected
      var $info = document.createElement("div");
      $info.setAttribute("class", "follow-worthy-info");
      $info.setAttribute("style", infoStyle);
      $info.innerHTML = infoContent;
    }

    // Add content to DOM
    $parent.appendChild($info);
  }, 3000);
};
