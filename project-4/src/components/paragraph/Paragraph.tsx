import React from 'react'
import Animation from './Animation'

const content = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

function Paragraph() {
  return (
    <>
        <div style={{height: "100vh"}}></div>
        <Animation content={content}/>
    </>
  )
}

export default Paragraph