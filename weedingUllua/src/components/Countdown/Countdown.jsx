import React,{useState,useEffect} from 'react'
import style from './Countdown.module.css'



export default function Countdown() {
    // const targetDate = new Date('Febreruary 02, 2025 09:00:00').getTime();
    const targetDate = new Date('2025-02-14T10:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => { 
        // Función para calcular el tiempo restante
        const calculateTimeLeft = () => {
          const now = new Date().getTime();
          const distance = targetDate - now;
    
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
            setTimeLeft({ days, hours, minutes });
          } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0 });
          }
        };
    
        // Calcular inicialmente el tiempo restante
        calculateTimeLeft();
    
        // Actualizar el tiempo restante cada minuto
        const intervalId = setInterval(calculateTimeLeft, 1000);
    
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
      }, [targetDate]);


  return (
    <section className={style.countdownPage}>
        <p className={style.phrase}>"Te invitamos a celebrar el inicio de nuestro ‘para siempre’."</p>
        <div className={style.chorometer}>
            <div>{timeLeft.days} <p className={style.time}>días</p></div>
            <div>{timeLeft.hours}<p className={style.time}>hrs</p></div>
            <div>{timeLeft.minutes}<p className={style.time}>min</p></div>
        </div>
    </section>
  )
}
