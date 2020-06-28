//references the tweet button
var tweet_button = document.getElementById("tweet_button");

function addTweet() {
    //Create div parent
    var tweet_block = document.createElement("div");

    //gets the value of the text area element
    var new_tweet = document.getElementById("tweetForm").value;


    //create a string of a code block and include the value of the text area above
    var tweet_block_code = [
        "<div class=\"userPhoto\"> <img src=\"img/me3.jpg\" alt=\"tweet-img\" class=\"tweet-img\"></div>",
        "<div class=\"tweetContent\"> <h6> <b> Kulengggg </b> <small class=\"text-muted\"> @khalsuu - 1m ago </small> </h6> <p>",
        new_tweet,
        "</p></div>",
        "<div class=\"tweetActions\"><a> <i class=\"far fa-comment fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"fas fa-retweet fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"far fa-heart fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"far fa-share-square fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k', "</span> </a> </div>"
    ].join('');


    console.log(tweet_block_code);

    //adds the class 'post-block' to apply the defined style and layout to the new element in the DOM
    tweet_block.classList.add('post-block');

    //adds the codeblock to the new div
    tweet_block.innerHTML = tweet_block_code;

    //gets the element after the user tweet block, to insert the new tweet as a child
    document.getElementById("main-bar").insertBefore(tweet_block, document.getElementById("tweetBlock").nextSibling);

    //resets the text area element value
    $("#tweetForm").val("");
}

//function to get a random integer bw 1 - 100
function randomInteger() {
    return Math.ceil((Math.random() * 100) + 1);
}


//add listener to the button
tweet_button.addEventListener('click', addTweet);