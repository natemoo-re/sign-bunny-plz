
const isTweetAReply = (tweet) => !!tweet.in_reply_to_status_id_str;

const isTweetAReplyToMe = (tweet) => tweet.in_reply_to_screen_name === process.env.TWITTER_HANDLE;

const haveIRepliedToTweetAlready = (tweetId, myTweets) => {
    return !!myTweets.find(t => t === tweetId);
};