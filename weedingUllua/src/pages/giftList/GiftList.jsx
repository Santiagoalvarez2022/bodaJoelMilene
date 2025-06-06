import React, { useEffect, useState } from 'react'
import style from './Gift.module.css'
import { getGiftList } from '../../services/GiftList'
import ModalGift from './ModalGift.jsx'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader.jsx'

 

const ItemGift = ({gift,selectItem}) =>{
        

    return (
        <div onClick={()=>selectItem(gift)} className={style.containerItem}>
            <p>{gift.item}</p>
        </div>
    )
}





export default function GiftList() {
    const navigate = useNavigate()
    const [giftList, setGiftList] = useState([]);
    const [itemSelected,setItemSelected] = useState({});
    const [isOpen,setOpen] = useState(false);
    const [loader, setLoader] = useState(false);

    const getListToApi = async() =>{
        setLoader(true)
        const response = await  getGiftList(navigate)

        if (response.status === 200) {
            setGiftList(response.data)
            setLoader(false)

            return
        }
        navigate('/error')
    }

    useEffect(()=>{
        getListToApi()
    },[])

    const selectItem = (item) =>{
        setItemSelected(item);
        setOpen(true)
    }
    
    const handlerCloseModal  = (setResponseMsg,setInput) =>{
        getListToApi()
        setOpen(false)
        setResponseMsg('')
        setInput('')
    }

   
    
  return (
    <div className={style.page}>
        {loader && <Loader />}
        <ModalGift  isOpen={isOpen} item={itemSelected} id={itemSelected.id}
        handlerCloseModal={handlerCloseModal}   />
        <div className={style.contTitle}>
            <Link to={'/'}>
                <svg className={style.arrowBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30">
                    <circle cx="25" cy="25" r="24" fill="black" />
                    <polyline points="30,15 20,25 30,35" fill="none" stroke="#a6af9a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
            <div className={style.iconGift}></div>
            <p className={style.titleGift}>Lista de Regalos</p>
        </div>
        <br />
        <p className={style.msgList}>Si te gustaría ayudarnos con algunos de estos elementos para nuestro hogar selecciona el deseado en la lista</p>
        
        <div className={style.listContainer}>
            {
                giftList.length ? giftList.map((gift, index)=>{
                    return <ItemGift 
                        key={index}
                        gift={gift}
                        selectItem={selectItem}
                        />
                }) 
                : null
            }        
        </div>  
        <p className={style.msgList} >Si preferís no llevar el regalo pero si transferirnos podés hacerlo a los siguientes alias:</p>
        <br />
        <p className={style.alias}>Alias: bodajoelymile</p>
        
      
    </div> 
  ) 
}
