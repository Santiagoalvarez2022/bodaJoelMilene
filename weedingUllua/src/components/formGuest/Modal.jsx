import React from 'react'
import style from './FormGuest.module.css'


export default function Modal({close}) {
  const addEventToCalendar = () => {
    const title = "Casamiento de Sabri y Lucas";
  
    // Ajustar las fechas a la zona horaria de Buenos Aires (GMT-3)
    const startDate = "20250214T190000-0300"; // 14 de febrero de 2025, 19:00 hora local (GMT-3)
    const endDate = "20250215T020000-0300";   // 15 de febrero de 2025, 02:00 hora local (GMT-3)
  
    const details = "¡Te invitamos a nuestro casamiento! Esperamos que puedas guardar ese día para que puedas participar";
    const location = "https://maps.app.goo.gl/g27rCFuDBFVnX9fh6";
  
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
  
    window.open(url, "_blank");
    close();
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
 