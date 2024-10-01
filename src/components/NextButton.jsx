import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const NextButton = ({onClick,arrow}) => {
  return (
    <button onClick={onClick}>
        {arrow}
    </button>
  )
}

export default NextButton
