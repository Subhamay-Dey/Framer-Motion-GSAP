import React from 'react'
import { WordAnimaion } from './WordAnimaion'


function Worddd() {

    const content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout that a reader will be distracted by the readable content."

  return (
    <div>
        <div style={{height: "100vh"}}></div>
        <WordAnimaion content={content}/>
        <div style={{height: "100vh"}}></div>
    </div>
  )
}

export default Worddd