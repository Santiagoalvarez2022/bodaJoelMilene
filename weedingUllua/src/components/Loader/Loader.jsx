import React from 'react'
import style from './Loader.module.css'
export default function Loader() {
    
  return (
    <div className={style.containerLoader}>
      <div className={style.Loader} >
         <div className={style.iconHearts}></div>
        <br />
        <p>Cargando...</p>
      </div>
     
    </div>
  )
} 
