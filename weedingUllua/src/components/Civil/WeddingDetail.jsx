import React from 'react'
import style from './civil.module.css'
import { useInView } from "react-intersection-observer";
import ButtonPage from '../ButtonPage/ButtonPage';
 
export default function WeddingDetail({ pin , img_icon, title, space, hrs,place}) {
    const { ref, inView } = useInView({
        threshold: 0.6, // Aparece cuando el 20% del elemento es visible
       
      });
    ;

    const seePlace = () =>  window.open(pin, "_blank")

    const bgImg = {
       backgroundImage:`url(${img_icon})`,
    }

  return (
    
    <section ref={ref} className={ style.weddingDetails }>
        <p className={style.title}>{title }</p>
        {space && <br />}
        <div style={bgImg} className={ inView ? style.container : style.hiddenContainer}></div>

        <div style={{width:'80%'}} className={!inView && style.colorHidden}>
          <p className={style.eventText }>Viernes 29 de Agosto <br />
          {hrs}</p>
          <p className={style.eventPlace}>{place}</p>
       <ButtonPage  text={'Ver ubicación'} func={seePlace}/>
        </div>

  </section>
  )
}
