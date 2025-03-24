import React from 'react'
import style from './FormGuest.module.css'


export default function Modal({close}) {
  const addEventToCalendar = () => {
    const title = "Casamiento de Joel y Mile";
  
    // Nueva fecha: 29 de agosto de 2025, 09:00 hora local (GMT-3) hasta 30 de agosto de 2025, 09:00 hora local
    const startDate = "20250829T090000-0300"; // 29 de agosto de 2025, 09:00 AM (GMT-3)
    const endDate = "20250830T090000-0300";   // 30 de agosto de 2025, 09:00 AM (GMT-3)
  
    const details = "¡Te invitamos a nuestro casamiento! Esperamos que puedas guardar ese día para que puedas participar";
    const location = "https://maps.app.goo.gl/v4TgRqkqxhSTQp3X7";
  
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
            <p>"Te pedimos que, por favor, envíes el dinero a esta cuenta (Alias: bodajoelymile) y nos envíes un mensaje para registrar tu pago. ¡Gracias!"</p>
            <br />
            <br />

            <div className={style.btnContainer}>
                <button  className={style.btnModal} onClick={()=>addEventToCalendar()} >Agendar Fecha</button>
                <button  className={style.btnModal} onClick={()=>close()}>Volver atras</button>
            </div>
            <div className={style.iconModal}></div>
        </div>
    </div>
  )
}
 