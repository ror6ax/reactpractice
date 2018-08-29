import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet () {
  return (
    <div className='tweet'>
      <Avatar/>
      <div className="content">
        <NameWithHandle/>
        <Message/>
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
