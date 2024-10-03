import React from 'react'

const NextButton = ({onClick,arrow}) => {
  return (
    <button onClick={onClick}>
        {arrow}
    </button>
  )
}

export default NextButton
