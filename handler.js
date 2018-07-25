'use strict';

const { finish } = require('./src/utils');
const { GenerateSign } = require('./src/services/generate-sign');
const makeTwitter = require('./src/services/twitter');


/** 
 * Polls Twitter for tweets where account is mentioned
 */
exports.fetchMentions = async (event, context, callback) => {
  const twitter = makeTwitter();

  let lastTweetRetrieved = null;
  let count = 0;
  let mentions = await twitter.getMentions();
  while (mentions.length) {
    // await
    lastTweetRetrieved = mentions[0].id;
    count += mentions.length;
    mentions = await twitter.getMentions(lastTweetRetrieved);
  }

  if (lastTweetRetrieved) {
    await cache.setAsync('lastTweetRetrieved', lastTweetRetrieved);
  }
  finish(callback).success(`Published ${count} tweets`);
}

/** 
 * Sends tweet in response to mentions
 */
exports.sendTweet = async (event, context, callback) => {
  const twitter = makeTwitter();
  
  const tweets = sns.getPayloadFromSnsEvent(event);
  const tweetObjects = await twitter.getActualTweetsReferenced(tweets);

  let results = await Promise.all(tweetObjects.map((tweetObject) => {
    return // something
  }));

  results = results.filter(r => r !== null);
  finish(callback, cache).success(`Processed ${tweets.length} tasks`);
}

console.log(GenerateSign('Hello world!\nWhatever man'));