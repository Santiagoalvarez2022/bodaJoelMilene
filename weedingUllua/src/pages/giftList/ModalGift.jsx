import React,{useEffect, useState} from 'react'
import style from './Gift.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { updateItem } from '../../services/GiftList';
import Loader from '../../components/Loader/Loader';

export default function ModalGift({isOpen,item,id,handlerCloseModal}) { 
    
    //validadciones correctas de errors
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState({ msg: "", status: false });
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate();
    const hanlderInput = ({ target }) => {
        const { value } = target;

        // Verifica si el valor contiene caracteres no permitidos
        const regex = /^[a-zA-Z\s]*$/; // Permite solo letras y espacios
        if (!regex.test(value)) {
        setError({ msg: "Solo se permiten letras y espacios.", status: true });
        } else {
        setError({ msg: "", status: false });
        }

    setInputValue(value); // Actualiza el valor del input
    };
    const[responseMsg,setResponseMsg] = useState('')

    useEffect(()=>{
        setResponseMsg('')
    },[])

    const sendData = async() =>{
        if (inputValue.trim('')==='') return 
        
        setLoader(true)
        try {
            const response = await updateItem(id,inputValue)
            if (response) {
                setResponseMsg('Registramos tu nombre con éxito, ¡Muchas gracias!')
            } else {
                 setResponseMsg('Al parecer este regalo acaba de ser seleccionado por otro invitado! Puedes regresar a la lista y escoger otro si lo deseas.')
            }
            
        } catch (error) {
            navigate('/error')
            console.log(error);
            
        } finally{
            setLoader(false)
        }
    
    
    }

    
    //pido la info del item si justo fue seleccionado muestro un mensaje


  

    if (!isOpen) {
        return 
    }
  return (
    <div className={style.modalContainer}>
        {loader && <Loader />}
        {
            responseMsg.length 
            ? <div className={style.modal}>
                <p className={style.msgGift}>{responseMsg}</p>
                <br />
                <button onClick={()=>handlerCloseModal(setResponseMsg,setInputValue)} className={style.btnInput}>cerrar</button>
            </div>
            : 
      
        <div className={style.modal}>
            <div className={style.headerModal}>
            <svg onClick={()=>handlerCloseModal(setResponseMsg,setInputValue)} className={style.arrowBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30">
                <circle cx="25" cy="25" r="24" fill="black" />
                <polyline points="30,15 20,25 30,35" fill="none" stroke="#a6af9a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div> 
            <p className={style.itemName}>"{item.item}"</p>
            <br />
            <p className={style.msgGift}>¡Si te gustaría ayudarnos con este regalo por favor ingresa tu nombre!</p>
            <br />
            {item.link !=='no' && <a target='_blank' href={item.link} className={style.link}>Referencia</a> }
            <br />
            <input className={style.input} type="text" value={inputValue} onChange={hanlderInput} placeholder='Nombre y Apellido' />
            {error.status && <p>{error.msg}</p>}

            {!error.status && <button onClick={()=>sendData()} className={style.btnInput}>Enviar</button>}

            <br />
            <p className={style.msgThankyou}>¡Gracias!</p>
        </div>
          }
    </div>
  )
}
