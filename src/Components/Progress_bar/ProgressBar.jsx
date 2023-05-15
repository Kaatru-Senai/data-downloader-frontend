import React, { useEffect } from 'react'
import styles from './ProgressBar.module.css'

function ProgressBar() {
  useEffect(()=>{
    
  },[])
  return (
    <div className={styles.ProgressBar}>
      <ul>
        <li className={styles.active}>Select Request</li>
        <li className={styles.active}>Enter Job Id</li>
        <li>Select Devices</li>
        <li>Select Format</li>
        <li>Download Data</li>
      </ul>
    </div>
  )
}

export default ProgressBar