import React from 'react'

export default function ButtonPage({text, func, }) {

    const buttonStyles = {
        padding: "0.4em 1.5em",
        fontSize: "0.9em",
        borderRadius: "1em",
        border: "none",
        color: "var(--secondary-color)",
        fontWeight: 500,
        background: "black",
        fontFamily :""
      };




  return (
    <button onClick={()=>func()} style={buttonStyles}>
        {text}
    </button>
  )
}
