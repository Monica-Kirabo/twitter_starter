import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  function handleOnTweetTextChange(event) {
    props.setTweetText(event.target.value);
  }

  function handleOnSubmit() {
    const newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    props.setTweets(props.tweets.concat(newTweet));
    props.setTweetText("");
  }
  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
        // textArea=""
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount
          tweetText={props.tweetText}
          tweetlen={props.tweetText.length}
          tweetsleft={140 - props.tweetText.length}
        />
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          disabled={props.tweetText.length == 0 || props.tweetText.length > 140}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return (
    <span style={{ color: props.tweetsleft < 0 ? "red" : "black" }}>
      {props.tweetsleft}
    </span>
  );
}

export function TweetSubmitButton(props) {
  // console.log(props.disabled);
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        onClick={props.handleOnSubmit}
        disabled={props.disabled}
        // textArea={tweetText}
      >
        Tweet
      </button>
    </div>
  );
}
