import { useState } from 'react'
import style from './App.module.css'
import Countdown from './components/Countdown/Countdown';
import WeddingDetail from './components/Civil/WeddingDetail';
import TempleDetail from './components/TempleDetail/TempleDetail';
import Banner from './components/Banner/Banner';
import FormGuest from './components/formGuest/FormGuest';
import { Link } from 'react-router-dom';

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
        <div  className={style.invitation}>

          {/* <h1 className={style.names}>Sabrina y Lucas</h1>
          <p className={style.merried}>¡Nos casamos!</p> */}
          
        </div>  
 
        
        <div>
          <p className={style.phrase}>"El principio de una eternidad compartida."</p>
          <h2 className={style.date}>14 . 02 . 2025</h2>
        </div>

      <Countdown />
      <WeddingDetail />
      <TempleDetail />
      <Banner />

        <section className={style.section}>

          <p className={style.text}>Estamos felices de que nos acompañes en este gran paso por construir nuestra hogar eterno!</p>
          <p className={style.text} >Si querés ayudarnos tocá este botón:</p>
          <div className={style.btnGiftCont}>
            <Link to={'/giftList'} className={style.btnGift}>LISTA DE REGALOS</Link>
          </div>
          <p className={style.text} >Para confirmar asistencia escribí tu nombre y aparecerá la opción correspondiente a vos. Toca luego de eso el botón para enviar la confirmación.</p>

            <FormGuest />
          <p className={style.text}>¡Tu presencia haría de este <br /> día un día mejor!</p>
          <div className={style.icon}></div>
        </section>
 
     
      
    </div>
  )
}

export default App






