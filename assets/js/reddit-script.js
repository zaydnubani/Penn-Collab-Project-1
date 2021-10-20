// verifying that the script is connected
console.log("reddit-script.js is connected");

// storing URL that needs to be called in a variable
var redditQueryURL = "https://www.reddit.com/r/productivity.json"

// function to get what is needed from the API
function getredditinfo(){
fetch(redditQueryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // displaying all relevant data in the console
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

        // creating a header for the first card which is the title of the top thread in a clickable hyperlink format
        var title1 = document.createElement("a");
        title1.textContent = data.data.children[0].data.title;
        document.getElementById("articlepoint1").appendChild(title1);
        title1.setAttribute("href",data.data.children[0].data.url);

        // creating the text for the card which is the post
        var selftext1 = document.createElement("p");
        // if the length of the post is less than 250 characters, it will display in full
        if (data.data.children[0].data.selftext.length < 250){
            selftext1.textContent = data.data.children[0].data.selftext
        }
        // if the length of the post is greater than or equal to 250 characters, it will display the first 250 characters, stop there, and add on "..."
        else{
            selftext1.textContent = data.data.children[0].data.selftext.substring(0,250) + "...";
        }
        document.getElementById("articlepoint1").appendChild(selftext1);

        // same thing as above, but for the second to top thread
        var title2 = document.createElement("a");
        title2.textContent = data.data.children[1].data.title;
        document.getElementById("articlepoint2").appendChild(title2);
        title2.setAttribute("href",data.data.children[1].data.url);

        var selftext2 = document.createElement("p");
        if (data.data.children[1].data.selftext.length < 250){
            selftext2.textContent = data.data.children[1].data.selftext
        }
        else{
            selftext2.textContent = data.data.children[1].data.selftext.substring(0,250) + "...";
        }
        document.getElementById("articlepoint2").appendChild(selftext2);

        // same thing as above, but for the third to top thread
        var title3 = document.createElement("a");
        title3.textContent = data.data.children[2].data.title;
        document.getElementById("articlepoint3").appendChild(title3);
        title3.setAttribute("href",data.data.children[2].data.url);

        var selftext3 = document.createElement("p");
        if (data.data.children[2].data.selftext.length < 250){
            selftext3.textContent = data.data.children[2].data.selftext
        }
        else{
            selftext3.textContent = data.data.children[2].data.selftext.substring(0,250) + "...";
        }
        document.getElementById("articlepoint3").appendChild(selftext3);
    })
}
// calling the function
getredditinfo();