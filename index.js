import React from 'react';
import ReactDOM from 'react-dom';

function Tweet () {
  render (
    <Avatar/>
    <div className='tweet'>Tweet</div>
  )
}

function Avatar () {
  render (
    <img
      src='https://foobar/baz.png'
      className='avatar'
      alt='avatar' />
  )
}

function Message () {
  render (
    <div className='message'>
      This is less than 140 symbols.
    </div>
  )
}

function NameWithHandle () {
  render (
    <span className='name-with-handle'>
      <span className='name'>Your name</span>
      <span className='handle'>@yourhandle</span>
    </span>
  )
}

ReactDOM.render(<Book/>,document.querySelector('#root'))
