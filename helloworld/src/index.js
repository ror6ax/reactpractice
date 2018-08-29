import React from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return (
    <div className='title'>
      The Title
    </div>
  )
}

function Author() {
  return (
    <div className='author'>
    The Author
    </div>
  )
}

function Stats() {
  return (
    <ul className='stats'>
      <Rating/>
      <Isbn/>
    </ul>
  )
}

function Rating() {
  return (
    <li className='rating'>5 stars</li>
  )
}

function Isbn() {
  return (
      <li className='isbn'>12-345678-910</li>
  )
}

function Book() {
  return (
    <div className='book'>
      <Title/>
      <Author/>
      <Stats/>
      <Greeting/>
      <Table/>
    </div>
  )
}


function Row() {
  return (
    <tr>
      <Col/>
      <Col/>
      <Col/>
    </tr>
  )
}

function Col() {
  return (
    <td>
      Column
    </td>
  )
}

function Table() {
  return (
    <table>
      <tbody>
        <Row/>
        <Row/>
      </tbody>
    </table>
  )
}

function Greeting() {
  // Try all of these variations:
  let username = "root";
  //let username = undefined;
  //let username = null;
  //let username = false;
  // Fill in the rest:
  return (
    <div>
      <span> Username is {username ? username : "Not logged in" }</span>
    </div>
  )
}

ReactDOM.render(<Book/>,document.querySelector('#root'))
