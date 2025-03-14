import React from 'react'

function Textsplit() {
    const text = "the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations."
  return (
    <div className='reveal'>
        <div>
            {text.split("").map((letter, index) => (
                <span className='reveal-text' key={index}>{letter}</span>
            ))}
        </div>
    </div>
  )
}

export default Textsplit