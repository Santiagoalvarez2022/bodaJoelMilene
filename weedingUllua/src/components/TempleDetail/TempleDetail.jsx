import React from 'react'
import style from './TempleDetail.module.css'
import ButtonPage from '../ButtonPage/ButtonPage'
import { useInView } from "react-intersection-observer";

export default function TempleDetail() {
    const { ref, inView } = useInView({
        threshold: 0.5, // Aparece cuando el 20% del elemento es visible
       
      });
    const seePlace = () => window.open("https://maps.app.goo.gl/csb9bpcQJNWUZvyV8", "_blank")

  return (
    <section ref={ref} className={style.section}>
    <div className={style.templeContainer}>
      <div className={inView ? style.temple : style.hiddenTemple} ></div>

      <div className={inView ?  style.templeDetail : style.colorHidden}>
        <p className={style.eventText}>Sábado 15 de Febrero 
        17:00 hrs</p>
        <p className={style.eventPlace}>Templo de Buenos Aires</p>
        </div>
    </div> 

    <ButtonPage text={'Ver Ubicacíon'} func={seePlace} />


  </section>
  )
}
