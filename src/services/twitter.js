"use strict";

const Twit = require('twit');

const isTweetAReply = (tweet) => !!tweet.in_reply_to_status_id_str;

const isTweetAReplyToMe = (tweet) => tweet.in_reply_to_screen_name === process.env.TWITTER_HANDLE;

const haveIRepliedToTweetAlready = (tweetId, myTweets) => {
    return !!myTweets.find(t => t === tweetId);
};

const twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = () => {
    const getMentions = async (lastTweetRetrieved) => {
        twitter.get('statuses/mentions_timeline', { count: 100 })
            .then(res => {
                if (res.data.errors) {
                    throw `Error in statuses/mentions_timeline response: ${JSON.stringify(r.data.errors)}`;
                }
                return res.data;
            })
            .then(tweets => tweets.filter(t => isTweetAReply(t) && !isTweetAReplyToMe(t)))
            .then(tweets => tweets.map(tweetObject => {
                return {
                    id: tweetObject.id_str,
                    referencing_tweet: tweetObject.in_reply_to_status_id_str,
                    author: tweetObject.user.screen_name
                }
            }))
    }

    const reply = (tweet, content) => {
        let options = {
            in_reply_to_status_id: tweet.id,
            status: `@${tweet.author} ${content}`
        };
        return twitter.post('statuses/update', options)
            .then(res => {
                if (res.data.errors) {
                    throw new TwitterErrorResponse('statuses/update', res.data.errors);
                }
                return res;
            })
    }

    return {
        getMentions,
        reply,
    }
}