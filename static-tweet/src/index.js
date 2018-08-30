import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Time = () => (
  <span className='time'>3 hours ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Tweet () {
  return (
    <div className='tweet'>
      <Avatar/>
      <div className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  )
}

function Avatar () {
  return (
    <img
      src='http://2.gravatar.com/avatar/8038d8658e97789b9f1dc5564e6bcf35'
      className='avatar'
      alt='avatar' />
  )
}

function Message () {
  return (
    <div className='message'>
      This is less than 140 symbols.
    </div>
  )
}

function NameWithHandle () {
  return (
    <span className='name-with-handle'>
      <span className='name'>Your name</span>
      <span className='handle'>@yourhandle</span>
    </span>
  )
}

ReactDOM.render(<Tweet/>,document.querySelector('#root'))
