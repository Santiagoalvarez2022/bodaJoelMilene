import { useState } from 'react'
import style from './App.module.css'
import Countdown from './components/Countdown/Countdown';
import WeddingDetail from './components/Civil/WeddingDetail';
import TempleDetail from './components/TempleDetail/TempleDetail';
import Banner from './components/Banner/Banner';
import FormGuest from './components/formGuest/FormGuest';
import { Link } from 'react-router-dom';
import rings_icon from './assets/rings_icons.svg' 
import cops_icon from './assets/cups_icons.svg'
 
function App() { 


  

  return (
    <div className={style.page}>
      <div  className={style.invitation}></div>  
      <div>
        <p className={style.phrase}>"El principio de una eternidad compartida."</p>
        <h2 className={style.date}>14 . 02 . 2025</h2>
      </div>
      <Countdown />
      <br />
      <br /> 
      
      <p className={style.titlePages}>Detalles de la boda</p>
      <WeddingDetail pin={"https://maps.app.goo.gl/Moz7u6Wf41fTLuGMA"} img_icon={rings_icon} title={'Civil'}  place={'Av. Wheelwright y Pres Roca, Rosario.'} hrs={'11:30 hs'}  />
      <br /><br /><br />
      <WeddingDetail  pin={"https://maps.app.goo.gl/yzUG2ak1v9mftmEK7"} img_icon={cops_icon} title={'Fiesta'} place={'Ruta nacional 9 1715, Funes, Santa Fe.'}  hrs={'20:00 hs'}   space={true}/>

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






