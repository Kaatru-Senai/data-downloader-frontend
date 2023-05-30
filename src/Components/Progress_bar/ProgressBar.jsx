import React, { useEffect ,useState } from 'react'
import styles from './ProgressBar.module.css'
import { useLocation } from 'react-router-dom';

function ProgressBar() {
  const location =useLocation();
  const [progressStep,setProgressStep]=useState(0);
  useEffect(()=>{
    console.log(location.pathname);
    switch(location.pathname){
      case "/select-datasource":
        setProgressStep(1);
        break;
      case "/select-dates":
        setProgressStep(2);
        break;
      case "/select-devices":
        setProgressStep(3);
        break;
      case "/select-datatype":
        setProgressStep(4);
        break;
      case "/select-database":
        setProgressStep(5);
        break;
    }
    console.log(progressStep)
  },[])
  return (
    <div className={styles.ProgressBar}>
      <ul className='flex flex-row-reverse'>
        <li className={progressStep==5 && styles.active}>Select Database</li>
        <li className={progressStep==4 && styles.active}>Select Format</li>
        <li className={progressStep==3 && styles.active}>Select Devices</li>
        <li className={progressStep==2 && styles.active}>Select Date Range</li>
        <li className={progressStep==1 && styles.active}>Select DataSource</li>
      </ul>
    </div>
  )
}

export default ProgressBar