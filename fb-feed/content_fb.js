window.onload = () => {
    setTimeout(function () {

        function getPostMetadata(urlToImage, url, description) {
            return '<div class="text"><div> <img src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/cp0/p80x80/46123997_2497238743636511_8156357862512132096_n.png?_nc_cat=106&_nc_map=control&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=4FnJywLK7A0AX-BcQAh&_nc_ht=scontent-bos3-1.xx&tp=30&oh=2d3ff5b6a36d1085a9d0e4e4d771df65&oe=60B1B6C8"/> <span><h4 class="title"> <a href="https://www.facebook.com/GuardianUs/?__cft__[0]=AZXo7Re_eByKGs6Cio44Io5C7se3Sm0DTet886w0iCcnZOf2lkufDv96O0CI7i6CHGnDVTmb3n0JbKCmoXjqUSnfvL54Ot1ynLq0ybuS3Jy8Se0w5BWQulfsjI3MXJaUAFbO3vwbmWSJIOmA32w0tBQto_gRCaXbQXp2A2GBllkS9KSfOEkGnk0M7RGGpsOIwXs&amp;__tn__=-UC%2CP-R" role="link"><strong><span >Guardian US</span></strong></a></h4></span></div><div> <a href="' + url + '"> <img class="image" src="' + urlToImage + '" alt="Trulli"> </a></div><div class="description"><p>' + description + '</p></div></div>'
        }
        // sample posting list
        var postings = [
            {
                urlToImage: "https://external-bos3-1.xx.fbcdn.net/safe_image.php?d=AQGicqK8AvKOjw4Z&w=1000&h=522&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDE5NTM3OTczMTIwODc0Njk6MTU3MDAwNDQ4NA%3D%3D&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQHE0ZOh9eAQ5qMK",
                url: "https://www.theguardian.com/world/2021/apr/29/canada-first-nations-un-peacekeepers-lobster?utm_term=Autofeed&CMP=fb_us&utm_medium=Social&utm_source=Facebook&fbclid=IwAR2auqyYS6PcigcsRh77VLYECL0k65nbF3h5NTjG4j8jCUPSm7ngUXGk3Mk#Echobox=1619692056",
                description: "Indigenous chief to request UN peacekeepers to prevent lobster fight boiling over."
            },
            {
                urlToImage: "https://external-bos3-1.xx.fbcdn.net/safe_image.php?d=AQHi0WUBz27mjT5j&w=1000&h=522&url=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2Fd65675a3e77f402cecca610ac0fb188c7e91dbd1%2F0_2_3270_1962%2Fmaster%2F3270.jpg%3Fwidth%3D1200%26height%3D630%26quality%3D85%26auto%3Dformat%26fit%3Dcrop%26overlay-align%3Dbottom%252Cleft%26overlay-width%3D100p%26overlay-base64%3DL2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc%26enable%3Dupscale%26s%3D40c80403de654155a6b38a5a76414a4b&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQG4KuEy9tm7G6VG",
                url: "https://www.theguardian.com/us-news/2021/apr/29/first-thing-america-on-the-move-again-as-biden-lays-out-sweeping-agenda?CMP=fb_us&utm_medium=Social&utm_source=Facebook&fbclid=IwAR1m8ipmh92xOper44yNuBw-ZnSI4iObxkmMFmOiomU6AJLQuoNhRdHWS_Q#Echobox=1619699507",
                description: "First Thing: America ‘on the move again’ as Biden lays out sweeping agenda"
            },
            {
                urlToImage: "https://external-bos3-1.xx.fbcdn.net/safe_image.php?d=AQGHF0tqFTk7LzA8&w=1000&h=522&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDEyOTE1MzY0MDc4Nzg0Njc4OjQyNzQwOTMxNQ%3D%3D&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQFicwwvCusSzAI-",
                url: "https://www.theguardian.com/environment/ng-interactive/2021/apr/29/end-of-the-ice-new-zealands-vanishing-glaciers?utm_term=Autofeed&CMP=fb_us&utm_medium=Social&utm_source=Facebook&fbclid=IwAR3rUHsKTHogf9X1gfqksSe_CI0KDNlTFT5w1Ary2QSE97eKkPyrRgFeCb4#Echobox=1619690596",
                description: "End of the ice: New Zealand’s vanishing glaciers"
            },
            {
                urlToImage: "https://external-bos3-1.xx.fbcdn.net/safe_image.php?d=AQEs2HOC0n7cv_Cz&w=1000&h=522&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDExOTEwNTU5OTI4MzI5MzA6NDE5NzYwMjAy&cfs=1&ext=jpg&ccb=3-5&_nc_hash=AQEjqCFJit6e4Eoh",
                url: "https://www.theguardian.com/us-news/2021/apr/28/ahmaud-arbery-killing-three-men-hate-crimes-charges?utm_term=Autofeed&CMP=fb_us&utm_medium=Social&utm_source=Facebook&fbclid=IwAR0PcYvIa5DCXcK1I2IKwVNHoZpPJe8JnGvegFJhDh6KUi5eC9mvi8ZzFqE#Echobox=1619651418",
                description: "Arbery, a 25-year-old Black man, was shot and killed as he ran along the street in Brunswick, Georgia in February last year"
            }
        ];

        var postIndex = 0;
        const targetNode = document.body;
        var parent = document.querySelector("div[role='feed']"); // parent refers to the contained that holds all posts
        // console.log(parent);

        // Options for the observer (which mutations to observe)
        // Set attributes to false if you do not care if existing nodes have changed,
        //  otherwise set it true. 
        // Observer is observing the `scroll position`
        const config = { attributes: false, childList: true, subtree: true };

        // Callback function to execute when user scrolls (mutations)
        const callback = function (mutationsList, observer) {
            var childCount = postIndex * 4; // display guardian post after every 4 posts on an average
            // console.log(parent.children, childCount, parent.children.length);
            // first check facebook has loaded some posts 
            // and then test whether the position, where guardian post will be added, is less than total posts
            // for example if FB has added only two posts, then first guardian post can be added as 0 * 4 < 2
            // but there is no space to add second post i.e. 1 * 4 > 2
            if (parent.children && childCount < parent.children.length) {
                var pointer = postIndex % postings.length; // circular array; go to start of array if all posts are added
                postIndex++;
                var nextDom = parent.children[childCount];
                var section = document.createElement("section");
                section.innerHTML = getPostMetadata(postings[pointer].urlToImage, postings[pointer].url, postings[pointer].description);
                parent.insertBefore(section, nextDom);
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);

        console.log("Script is running");
    }, 3000);
};