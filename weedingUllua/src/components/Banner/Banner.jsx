import React from 'react'
import style from './Banner.module.css'
import { useInView } from "react-intersection-observer";


export default function Banner() {
    const { ref:leaves, inView:leavesInView } = useInView({
        threshold: 0.3, // Aparece cuando el 30% del elemento es visible
        triggerOnce: true,
    });

  return (
    <div ref={leaves} className={  leavesInView ? style.banner : style.bannerHidden }>
    <div className={leavesInView? style.leaveOne : style.leavesHidden }></div>
    <div className={ leavesInView? style.photoBanner : style.photoHidden}></div>
    <div className={  leavesInView? style.leaveTwo : style.leavesHidden }></div>
  </div>

  )
}
