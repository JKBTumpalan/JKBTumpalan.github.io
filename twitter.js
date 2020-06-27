var tweet_button = document.getElementById("tweet_button");

function addTweet() {
    //Create div parent and children elements of a post/tweet block

    var tweet_block = document.createElement("div");
    var new_tweet = document.getElementById("tweetForm").value;


    var tweet_block_code = [
        "<div class=\"userPhoto\"> <i class=\"far hover-flag fa-user fa-fw fa-2x\"> </i></div>",
        "<div class=\"tweetContent\"> <h6> <b> Kulengggg </b> <small class=\"text-muted\"> @khalsuu - 1m ago </small> </h6> <p>",
        new_tweet,
        "</p></div>",
        "<div class=\"tweetActions\"><a> <i class=\"far fa-comment fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"fas fa-retweet fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"far fa-heart fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k',
        "</span> </a><a> <i class=\"far fa-share-square fa-fw\"></i> <span class=\"actionCountLabel\">", randomInteger().toString() + 'k', "</span> </a> </div>"
    ].join('');

    console.log("logging..");

    console.log(tweet_block_code);

    tweet_block.classList.add('post-block');
    tweet_block.innerHTML = tweet_block_code;
    document.getElementById("main-bar").insertBefore(tweet_block, document.getElementById("tweetBlock").nextSibling);

    $("#tweetForm").val("");
}

function randomInteger() {
    return Math.ceil((Math.random() * 100) + 1);
}

tweet_button.addEventListener('click', addTweet);