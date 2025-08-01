import { useState } from 'react'
import style from './App.module.css'
import Countdown from './components/Countdown/Countdown';
import WeddingDetail from './components/Civil/WeddingDetail';
import TempleDetail from './components/TempleDetail/TempleDetail';
import Banner from './components/Banner/Banner';
import FormGuest from './components/formGuest/FormGuest';
import { Link } from 'react-router-dom';
import rings_icon from './assets/rings_icons.svg' 
import cake_icon from './assets/cake.svg'


function App() { 
  return (
    <div className={style.page}>
      <div  className={style.invitation}>
        <div className={style.page_one_msg}>
          <p>Por fin...</p>
          <p>¡NOS CASAMOS!</p>
        </div>
        <h1 className={style.names}>Joel y Mile</h1>
      </div>  

      <h2 className={style.date}>Viernes 29 de Agosto</h2>


      <Countdown />
      

      <p className={style.titlePages}>Detalles de la boda</p>

      <WeddingDetail pin={"https://maps.app.goo.gl/Fkgvu1aQfeW2TYyD9"} img_icon={rings_icon} title={'Civil'}  place={'Av. Uriburu 637, Rosario - Por favor estar 20 minutos antes.'} hrs={'10:00hs'}  />
      <br />
      <WeddingDetail  pin={"https://maps.app.goo.gl/v4TgRqkqxhSTQp3X7"} img_icon={cake_icon} title={'Fiesta'} place={'Blvd. Seguí 931, Rosario.'}  hrs={'21:00 hs a 04:00 hs'}   space={true} flex='row'/>
      <Banner />


      <section className={style.section}>

          <p className={style.text_title}>¡Estamos felices de que nos acompañes en nuestro gran día!</p>

          <p className={style.text} >Si querés ayudarnos tocá este botón:</p>
           <br />
          <div className={style.btnGiftCont}>
            <Link to={'/gifts'} className={style.btnGift}>Lista de regalos</Link>
          </div>
          <p className={style.text_p}>
          Para confirmar asistencia escribí tu nombre, una vez que aparezca, seleccionalo. Luego de eso toca el botón para enviar la confirmación.
          </p>   
          <br />
          <p className={style.text_p}>
          Menores de 0 a 3 años $5.000 (seguro) <br />
          Niños de 4 a 10 años $23.000 <br />
          Adultos $46.000
          </p>
          <br />
          <p className={style.text_p}>
            Vestimenta Semi formal/ formal
            <br />
          "Los colores blancos o nudes son propiedad exclusiva de la novia 🤭"
          </p>     
          <FormGuest />
          <p className={style.text}>¡Tu presencia haría de este <br /> día un día mejor!</p>
          <div className={style.contIcon}>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
          </div>
      </section>
    </div>
  )
}

export default App






