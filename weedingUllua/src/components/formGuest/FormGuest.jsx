import React, { useEffect, useState } from 'react'
import style from './FormGuest.module.css'
import { confirmGuest, getGuestList } from '../../services/GuestList';
import Modal from './Modal.jsx';

export default function FormGuest() {
    const [options,setOptions] = useState([])
    const [input,setInput] = useState('')
    // lista de nombre traidos desde google sheets
    const [Guests,setGuets] = useState([])
    // estados para mostrar options
    const [showOptions,setShhowOptions] = useState(false)
    //estado para enviar solo cuando le nombre este elegido y sea correcto
    const [selected,setSelected] = useState(false)
    //informacion del invitado seleccionado 
    const [modal,setModal] = useState(false)

    const closeModal = () =>{
      setModal(false)
    }

    const [guestSelected, setGuest] = useState()  
    
    useEffect(()=>{
      getGuestList(setGuets) 
    },[])

    const handlerInput = ({target}) =>{
      //filtro entre los invitados de acuerdo con el valor del input 
      let {value} = target;
      console.log(value)
      
      const regex = /^[a-zA-Z ]*$/; // Permite letras y vacío
    
      if (!regex.test(value)) {
        value = value.replace(/[^a-zA-Z ]/g, ""); // Elimina caracteres no permitidos
      }
      const findName = Guests.findIndex(o=> o.Invitado === value)
      if (findName === -1) {
        //manejo el erro de selecionar un nombre y luego borrar caracteres y que el boton quede seleccionado
        setSelected(false)

        
      }


      setInput(value);

      if(value){
     
        let list_options = Guests.filter((guest)=> guest.Invitado.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
        setOptions(list_options)
        //mostrar options
        setShhowOptions(true)
      }
      else {
        setShhowOptions(false)
        setSelected(false)
      }
    }

    const selecteName = (option) =>{
      console.log();
      
      const findName = Guests.findIndex(o=> o.Invitado === option.Invitado)
      if (findName !== -1) {
        setInput(option.Invitado)
        setSelected(true)
        setShhowOptions(false)
        setGuest(option)
      }
      console.log(findName);
      
    } 



    const confirmInvitation = async() =>{
      try {
        const response = await confirmGuest(guestSelected.id);

        setSelected(false)
        if (response.status === 200) {
          setModal(true)
          setInput("")
          setGuets()
          showOptions(false)
         
        }
      } catch (error) {
        //enviar a ventana de error 
      }
    }

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



        <ul className={style.optionsContainer}>
              {
                showOptions && options.length>0 && (
                  
                  options.map((option,index)=>{

                  if (option.confirmed.toLocaleLowerCase() === "no") {
                    
                    return <li
                    className={style.optionNames}
                    key={index}
                    onClick={() => selecteName(option)}
                    >
                    {option.Invitado}
                  </li>
                  }
                })
              
              ) 
              }
               {selected && <button   onClick={()=> confirmInvitation()} className={style.acptInvitation}> Confirmar </button>
               }
               {selected &&  <p className={style.guestSelected}>Invitado selecionado <br /> "{input}"</p> }

          </ul>
          {modal && <Modal  close={closeModal}/>}
          
    </form>
  )
}
