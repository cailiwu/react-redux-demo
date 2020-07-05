// /src/pages.js

import React from 'react';
import {connect} from "react-redux"

const Book = (props) => {
  return (
    <div>
      <h1 className="py-3">{props.data}</h1>
      <button onClick={()=> {props.addMessage(2)}}>＋</button>
    </div>
  )
};

export { Book };