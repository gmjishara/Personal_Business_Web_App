import React from 'react'
import styles from "./style.module.css"

export default function AboutLayout({children}) {
  return (
    <div className={styles.aboutLayout}>
        {children}
    </div>
  )
}
