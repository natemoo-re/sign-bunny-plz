'use strict';

/** 
 * Polls Twitter for tweets where account is mentioned
 */
exports.fetchMentions = async (event, context, callback) => {
}

/** 
 * Sends tweet in response to mentions
 */
exports.sendTweet = async (event, context, callback) => {
  const tweets = sns.getPayloadFromSnsEvent(event);
  const tweetObjects = await twitter.getActualTweetsReferenced(tweets);

  let results = await Promise.all(tweetObjects.map((tweetObject) => {
    return // something
  }));

  results = results.filter(r => r !== null);
  cloudwatch.logResults(results);
  finish(callback, cache).success(`Processed ${tweets.length} tasks`);
}