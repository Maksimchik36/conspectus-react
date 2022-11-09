import React from 'react'

const Book = ({props}) => {

  return (
    <div id={props.id}>{props.name}</div>
  )
}

export default Book;