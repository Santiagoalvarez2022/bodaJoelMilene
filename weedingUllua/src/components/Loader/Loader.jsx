import React from 'react'
import style from './Loader.module.css'
export default function Loader() {
    
  return (
    <div className={style.containerLoader}>
      <div className={style.Loader} >
        <br />
        <p>Cargando...</p>
      </div>
     
    </div>
  )
} 
