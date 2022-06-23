import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed({
  tweetText,
  setTweetText,
  tweets,
  setTweets,
  userProfile,
}) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox
        setTweets={setTweets}
        tweets={tweets}
        userProfile={userProfile}
        tweetText={tweetText}
        setTweetText={setTweetText}

        //console.log(props.tweetleft)
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {
          /* ADD CODE HERE */
          tweets.map((tweet, idx) => {
            return <Tweet key={idx} tweet={tweet} />;
          })
        }
      </div>
    </div>
  );
}
