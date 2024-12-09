import React from 'react'
import style from './Banner.module.css'
import { useInView } from "react-intersection-observer";


export default function Banner() {
    const { ref:leaves, inView:leavesInView } = useInView({
        threshold: 0.2, // Aparece cuando el 20% del elemento es visible
       
    });

  return (
    <div ref={leaves} className={  leavesInView ? style.banner : style.bannerHidden }>
    <div className={leavesInView? style.leaveOne : style.leavesHidden }></div>
    <div className={ leavesInView? style.photoBanner : style.photoHidden}></div>
    <div className={  leavesInView? style.leaveTwo : style.leavesHidden }></div>
  </div>

  )
}
