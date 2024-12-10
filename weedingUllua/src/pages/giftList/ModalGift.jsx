import React from 'react'
import style from './Gift.module.css'
export default function ModalGift({isOpen,item,handlerCloseModal}) {
    //validadciones correctas de errors

console.log('item selecionado en modal ', item);






    if (!isOpen) {
        return
    }
  return (
    <div className={style.modalContainer}>
        <div className={style.modal}>
            <div className={style.headerModal}>
            <svg onClick={()=>handlerCloseModal()} className={style.arrowBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30">
                <circle cx="25" cy="25" r="24" fill="black" />
                <polyline points="30,15 20,25 30,35" fill="none" stroke="#a6af9a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            </div> 
            <p className={style.msgGift}> Si te gustaria ayudarnos con este regalo por favor ingresa tu nombre</p>
            <br />
            <input className={style.input} type="text" placeholder='Nombre y Apellido' />
            <button className={style.btnInput}>Enviar</button>
            <br />
            <p>¡Gracias!</p>
        </div>
    </div>
  )
}
