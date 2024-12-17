import React, { useEffect, useState } from 'react'
import style from './FormGuest.module.css'
import { confirmGuest, getGuestList } from '../../services/GuestList';
import Modal from './Modal.jsx';
import Loader from '../Loader/Loader.jsx';
import { useNavigate } from 'react-router-dom';

export default function FormGuest() {
    const navigate = useNavigate();
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
    const [loader,setLoader] = useState(false)

    const [guestSelected, setGuest] = useState()  
    const closeModal = () =>{
      handlerGuestList()
      setModal(false)
    }
    const handlerGuestList = async() =>{
      setLoader(true)
      try {
        
        const response = await getGuestList()
        
        if (response.status === 200) {
            setLoader(false)
            setGuets(response.data)
        }
      } catch (error) {
        navigate('/error')
        console.log(error, 'Error al pedir la lista de invitados');
        
      }

    }
    
    

    
    useEffect(()=>{
      handlerGuestList()
    },[])



    const handlerInput = ({target}) =>{
      //filtro entre los invitados de acuerdo con el valor del input 
      let {value} = target;
      setSelected(false)
      setGuest()
      //evaluo si hay un nombre selecionado y si lo hay lo busco en el array, porque hay un error al selecionar un nombre y depuest borar parte de el el boton sigue ahi
      
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
     
      const findName = Guests.findIndex(o=> o.Invitado === option.Invitado)
      if (findName !== -1) {
        setInput(option.Invitado)
        setSelected(true)
        setShhowOptions(false)
        setGuest(option)
      }
      
    } 



    const confirmInvitation = async() =>{
      try {
        const response = await confirmGuest(guestSelected.id);
        setLoader(true)
        setSelected(false)
        if (response.status === 200) {
          setModal(true)
          setInput("")
          setGuest()
          setShhowOptions(false)
          setLoader(false)
          
        }
      } catch (error) {
        //enviar a ventana de error 
        navigate('/error')
        console.log(error);
        
      }
    }

    console.log('lista de invitados ', Guests);
    

  return (<>
      {loader && <Loader />}
   
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
               {selected &&  <p className={style.guestSelected}>Invitado seleccionado <br /> "{input}"</p> }

          </ul>
          {modal && <Modal  close={closeModal} />}
          
    </form>
  </>
  )
}
