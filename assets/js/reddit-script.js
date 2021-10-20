console.log("i'm connected");

var redditQueryURL = "https://www.reddit.com/r/productivity.json"

function getredditinfo(){
fetch(redditQueryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('productivity subreddit \n----------');
        console.log(data);
        console.log(data.data.children[0])
        console.log(data.data.children[0].data.title)
        console.log(data.data.children[0].data.selftext)
        console.log(data.data.children[0].data.url)

        console.log(data.data.children[1].data.title)
        console.log(data.data.children[1].data.selftext)
        console.log(data.data.children[1].data.url)

        console.log(data.data.children[2].data.title)
        console.log(data.data.children[2].data.selftext)
        console.log(data.data.children[2].data.url)

        var title1 = document.createElement("a");
        title1.textContent = data.data.children[0].data.title;
        document.getElementById("articlepoint1").appendChild(title1);
        title1.setAttribute("href",data.data.children[0].data.url);

        var selftext1 = document.createElement("p");
        selftext1.textContent = data.data.children[0].data.selftext;
        document.getElementById("articlepoint1").appendChild(selftext1);

        var title2 = document.createElement("a");
        title2.textContent = data.data.children[1].data.title;
        document.getElementById("articlepoint2").appendChild(title2);
        title2.setAttribute("href",data.data.children[1].data.url);

        var selftext2 = document.createElement("p");
        selftext2.textContent = data.data.children[1].data.selftext;
        document.getElementById("articlepoint2").appendChild(selftext2);

        var title3 = document.createElement("a");
        title3.textContent = data.data.children[2].data.title;
        document.getElementById("articlepoint3").appendChild(title3);
        title3.setAttribute("href",data.data.children[2].data.url);

        var selftext3 = document.createElement("p");
        selftext3.textContent = data.data.children[2].data.selftext;
        document.getElementById("articlepoint3").appendChild(selftext3);
    })
}
getredditinfo();