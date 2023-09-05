import React from 'react'
import styles from "./style.module.css"

export default function PortfolioLayout({children}) {
  return (
    <div>
        <h1 className={styles.portfolioTitle}>Our Works</h1>
        {children}
    </div>
  )
}
