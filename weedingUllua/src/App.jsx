import { useState } from 'react'
import style from './App.module.css'
import Countdown from './components/Countdown/Countdown';
import WeddingDetail from './components/Civil/WeddingDetail';
import TempleDetail from './components/TempleDetail/TempleDetail';
import Banner from './components/Banner/Banner';
import FormGuest from './components/formGuest/FormGuest';
import { Link } from 'react-router-dom';

function App() {


  

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

          <p className={style.text}>¡Estamos felices de que nos acompañes en este gran paso por construir nuestro hogar eterno!</p>
          <p className={style.text} >Si querés ayudarnos tocá este botón:</p>
          <div className={style.btnGiftCont}>
            <Link to={'/gifts'} className={style.btnGift}>LISTA DE REGALOS</Link>
          </div>
          <br />
          <h3>CONFIRMAR ASISTENCIA</h3>
          <p className={style.text} >Escribí tu nombre y aparecerá la opción correspondiente a vos :</p>
            <FormGuest />
          <p className={style.text}>¡Tu presencia haría de este <br /> día un día mejor!</p>
          <div className={style.icon}></div>
          <p className={style.text} >Dress Code : Elegante/Formal</p>
          <br />
          <br />
        </section>
 
     
      
    </div>
  )
}

export default App






