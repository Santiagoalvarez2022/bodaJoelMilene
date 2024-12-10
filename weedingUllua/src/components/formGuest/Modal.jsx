import React from 'react'
import style from './FormGuest.module.css'

export default function Modal({close}) {
  const addEventToCalendar = () =>{
      const title = "Casamiento de Sabri y Lucas";
      const startDate = "20250214T180000Z"; // 14 de febrero de 2025, 18:00 UTC
      const endDate = "20250214T200000Z";   // 14 de febrero de 2025, 20:00 UTC
      const details = "Te invitamos a nuestro casamiento! Esperamos que puedas guardar ese día para que puedas participar";
      const location = "Calle Falsa 123, Ciudad, País";
  
      const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
        details
      )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
  
      window.open(url, "_blank");
      close()
  };



  return (
    <div className={style.modalContainer}>
        <div className={style.modal}>
            <div className={style.iconModal}></div>
            <p className={style.msg}>¡Confirmacíon enviada con exito!</p>
            <div className={style.btnContainer}>
                <button  className={style.btnModal} onClick={()=>addEventToCalendar()} >Agendar</button>
                <button  className={style.btnModal} onClick={()=>close()}>Volver atras</button>
            </div>
            <div className={style.iconModal}></div>
        </div>
    </div>
  )
}
 