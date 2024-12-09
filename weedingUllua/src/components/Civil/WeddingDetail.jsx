import React from 'react'
import { useInView } from "react-intersection-observer";
import ButtonPage from '../ButtonPage/ButtonPage';
import style from './weddingD.module.css'
 
export default function WeddingDetail() {
    const { ref, inView } = useInView({
        threshold: 0.6, // Aparece cuando el 20% del elemento es visible
       
      });
    ;

      const seePlace = () =>  window.open("https://maps.app.goo.gl/yzUG2ak1v9mftmEK7", "_blank")

  return (
    
    <section ref={ref} className={ style.weddingDetails }>

        <p className={style.titlePages}>Detalles de la boda</p>
        <div className={ inView ? style.container : style.hiddenContainer}></div>

        <div  className={!inView && style.colorHidden}>
          <p className={style.eventText }>Viernes 14 de Febrero <br />
          19:00 hrs</p>
          <p className={style.eventPlace}> Ruta nacional 9 1715, Funes, Santa Fe, Arg</p>
        </div>

       <ButtonPage  text={'Ver Ubicacíon'} func={seePlace}/>
  </section>
  )
}
