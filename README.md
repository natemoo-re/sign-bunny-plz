# Sign Bunny, PLZ!
Twitter Bot built with Node, AWS Lamdba, and AWS SNS

---


┌───────────┐  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tweet at me](https://twitter.com/intent/tweet?text=%40signbunnyplz%20Hello%20world)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and I'll reply with your  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message in a sign!  
└───────────┘  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(\\__/)  ||  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(•ㅅ•)  ||  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/  　  づ  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[@signbunnyplz](https://twitter.com/signbunnyplz)

## How It Works
This bot is built upon two Lambda Functions
- **fetchMentions** checks for new mentions. This runs every 5 minutes, publishing the mentions as a new notification on an SNS topic
- **sendTweet** is triggered by SNS Notifications. It processes the tweets and replies with a formatted sign.

## Prior Art
Based largely on [DownloadThisVideo](https://github.com/shalvah/DownloadThisVideo), another Twitter bot using the same AWS Lambda/SNS setup

## Notes
Formatting text with a non-monospace font is not a trivial task, so currently we're just avoiding the issue and keeping things left aligned and letting words run off the sign.

We could convert the text to Unicode monospace, but that's not a 1-to-1 response. Potentially another cool bot, though.

(Twitter's font stack is `14/20 "Helvetica Neue", Helvetica, Arial, sans-serif`)

## TODO
Genericize this stack to build a `ReplyBot` NPM Module?
