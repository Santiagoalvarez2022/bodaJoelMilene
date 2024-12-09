import React, { useEffect, useState } from 'react'
import style from './FormGuest.module.css'
import { getGuestList } from '../../services/GuestList';

export default function FormGuest() {
    const [options,setOptions] = useState([])
    const [input,setInput] = useState('')
    // lista de nombre traidos desde google sheets
    const [Guests,setGuets] = useState([])
    // estados para mostrar options
    const [showOptions,setShhowOptions] = useState(false)

  const handlerInput = ({target}) =>{
    //filtro entre los invitados de acuerdo con el valor del input 
    const {value} = target;
    setInput(value);

    if(value){
      //filtrar array de los inv
      let list_options = Guests.filter((guest)=> guest.Invitado.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
      setOptions(list_options)
      //mostrar options
      setShhowOptions(true)
    }
    else setShhowOptions(false)
    
   
  }

    useEffect(()=>{
        getGuestList(setGuets)
    },[])

    console.log("estados guestList ", Guests);
    console.log("estados options ", options);
    

  return (
    <form className={style.guestForm} onSubmit={(e)=>e.preventDefault()}>
        <input
         value={input}
         onChange={handlerInput}
         type="text" 
         name="" 
         id="" 
         className={style.inptGuest} placeholder='Nombre y Apellido' 
         />

<ul className={style.list}>
              {
                showOptions && options.length>0 && (options.map((option,index)=>{


                  if (option.confirmed.toLocaleLowerCase() === "no") {
                    
                    return <li
                    className={style.item}
                    key={index}
                    onClick={e => (option)}
                    >
                    {option.Invitado}
                  </li>
                  }
                })) 
              }
            </ul>

        <button   onClick={()=> window.open("https://maps.app.goo.gl/csb9bpcQJNWUZvyV8", "_blank")} className={style.acptInvitation}> Confirmar </button>
    </form>
  )
}
