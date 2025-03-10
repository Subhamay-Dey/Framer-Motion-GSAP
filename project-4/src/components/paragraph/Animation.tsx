import React from 'react'
import styles from "./paragraph.module.scss"

function Animation({content}: {content: string}) {
  return (
    <div className={styles.paragraph}>{content}</div>
  )
}

export default Animation