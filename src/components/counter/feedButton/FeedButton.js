import React from 'react'
const FeedButton = ({handleIncrement} ) => {
return (
    <>
    <button name="good" type="button" onClick={handleIncrement}>
    Good
  </button>
  <button name="neutral" type="button" onClick={handleIncrement}>
    Neutral
  </button>
  <button name="bad" type="button" onClick={handleIncrement}>
    Bad
  </button>
</>
)

}
export default FeedButton