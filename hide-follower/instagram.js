window.onload = () => {
  console.log("This Script is running");

  setTimeout(function () {
    const follower = document.querySelector(
      "#react-root > section > main > div > header > section > ul > li:nth-child(3) > a"
    );

    console.log(follower);
    if (follower != null) {
      follower.style.display = "none";
    }
  }, 3000);
};
