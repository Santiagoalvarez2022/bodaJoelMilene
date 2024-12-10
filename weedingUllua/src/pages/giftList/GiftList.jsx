import React, { useEffect, useState } from 'react'
import style from './Gift.module.css'
import { getGiftList } from '../../services/GiftList'
import ModalGift from './ModalGift.jsx'
import { Link } from 'react-router-dom'


 

const ItemGift = ({gift,selectItem}) =>{
        console.log(gift);
        

    return (
        <div onClick={()=>selectItem(gift)} className={style.containerItem}>
            <p>{gift.item}</p>
        </div>
    )
}




export default function GiftList() {

    const [giftList, setGiftList] = useState([]);
    const [itemSelected,setItemSelected] = useState({});
    const [isOpen,setOpen] = useState(false);

    useEffect(()=>{
        getGiftList(setGiftList)
    },[])

    const selectItem = (item) =>{
        setItemSelected(item);
        setOpen(true)
    }
    
    const handlerCloseModal  = () =>{
        getGiftList(setGiftList)
        setOpen(false)
    }

   
    
  return (
    <div className={style.page}>

        <ModalGift  isOpen={isOpen} item={itemSelected} 
        handlerCloseModal={handlerCloseModal}   />
        <div className={style.header}>
           


            <div className={style.leaves}></div>
        </div>

        <div className={style.contTitle}>
            <Link to={'/'}>
                <svg className={style.arrowBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30">
                    <circle cx="25" cy="25" r="24" fill="black" />
                    <polyline points="30,15 20,25 30,35" fill="none" stroke="#a6af9a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>
            <div className={style.iconGift}></div>
            <p>Lista de Regalos</p>
        </div>
        
        <div className={style.listContainer}>
            {
                giftList.length ? giftList.map((gift, index)=>{
                    console.log("==", gift);
                    
                    return <ItemGift  
                        key={index}
                        gift={gift}
                        selectItem={selectItem}
                        />
                }) 
                : null
            }        
        </div>  
        
        <p className={style.alias}>Alias : cuchu.sabri</p>
        
        <div className={style.footer}>
            <div className={style.leavesTwo}></div>
        </div>
    </div> 
  ) 
}
