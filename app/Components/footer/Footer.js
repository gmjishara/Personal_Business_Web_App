import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>@2023 gmjishara. All rights reserved.</div>
      <div className={styles.logo}>
        <Image src="/facebook.png" width={30} height={30}/>
        <Image src="/youtube.png" width={30} height={30}/>
        <Image src="/linkedin.png" width={30} height={30}/>
        <Image src="/insta.png" width={30} height={30}/>
      </div>
    </div>
    
  )
}
