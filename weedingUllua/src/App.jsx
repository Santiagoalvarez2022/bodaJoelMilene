import { useState } from 'react'
import style from './App.module.css'
import Countdown from './components/Countdown/Countdown';

function App() {
 
  const addEventToCalendar = () =>{
    {
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
    }
  };



  return (
    <div className={style.page}>

      <section className={style.fade}>

        <div  className={style.invitation}>

          <h1 className={style.names}>Sabrina y Lucas</h1>
          <p className={style.merried}>¡Nos casamos!</p>
        </div>  
 
        
        <div>
          <p className={style.phrase}>"El principio de una eternidad compartida."</p>
          <h2 className={style.date}>14 . 02 . 2025</h2>
        </div>
      </section>

      <Countdown />

      <section className={style.weddingDetails}>

        <p className={style.titlePages}>Detalles de la boda</p>
        <div className={style.container}>

        </div>
        <p className={style.eventText}>Viernes 14 de Febrero <br />
        19:00 hrs</p>
        <p className={style.eventPlace}> Ruta nacional 9 1715, Funes, Santa Fe, Arg</p>
        <button   onClick={()=> window.open("https://maps.app.goo.gl/yzUG2ak1v9mftmEK7", "_blank")} className={style.buttonPage}> Ver ubicacíon </button>


      </section>
      
      <section id='temple' className={style.section}>
        <div className={style.templeContainer}>
          <div className={style.temple}></div>

          <div className={style.templeDetail}>
          <p className={style.eventText}>Sábado 15 de <br />Febrero 
          16:00 hrs</p>
          <p className={style.eventPlace}>Templo de Buenos Aires</p>
          </div>
        </div> 

        
        <button   onClick={()=> window.open("https://maps.app.goo.gl/csb9bpcQJNWUZvyV8", "_blank")} className={style.buttonPage}> Ver ubicacíon </button>


      </section>


      <div className={style.banner}>
        <div className={style.leaveOne}></div>
        <div className={style.photoBanner}></div>
        <div className={style.leaveTwo}></div>
      </div>

        <section className={style.section}>

          <p className={style.text}>Estamos felices de que nos acompañes en este gran paso por construir nuestra hogar eterno!</p>
          <p className={style.text} >Si querés ayudarnos tocá este botón:</p>
          <div className={style.btnGiftCont}>
            <div className={style.btnGift}>LISTA DE REGALOS</div>
          </div>
          <p className={style.text} >Para confirmar asistencia escribí tu nombre y aparecerá la opción correspondiente a vos. Toca luego de eso el botón para enviar la confirmación.</p>

            <form className={style.guestForm} onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="" id="" className={style.inptGuest} placeholder='Nombre y Apellido' />
            <button   onClick={()=> window.open("https://maps.app.goo.gl/csb9bpcQJNWUZvyV8", "_blank")} className={style.acptInvitation}> Confirmar </button>
          </form>
          <p className={style.text}>¡Tu presencia haría de este <br /> día un día mejor!</p>
          <div className={style.icon}></div>
        </section>
 
 
      
    </div>
  )
}

export default App








      {/* 
      <section className={style.weddingDetails}>
        <p className={style.titlePages}>Detalles de la boda</p>
        <div className={style.contIcons}>
          <div className={style.rings}></div>
          <div  className={style.copas}></div>
        </div>

        <p className={style.information}>Viernes 14 de Frebrero <br /> 18:00 hrs </p>
        <button  className={style.buttonPage}>Ver ubicacíon</button>
        <div className={style.contIcons}>
          <div></div>
          <div></div>
        </div>
        <p className={style.information}>Los esperamos el dia
        14.02.2025 a las 18:00hs en lugar </p>
        <button  className={style.buttonPage}> Ver ubicacíon </button>
      </section>
      <div className={style.imgHorizontal}></div> */}



{/* 


      <section className={style.weddingConfirmation}>
        <p className={style.information}>mensaje para la lista de regalo</p>
        <button className={style.buttonGift}> Lista de regalos </button>
        <button className={style.buttonConfirmation}>Confirmar asistencia</button>
      </section> */}