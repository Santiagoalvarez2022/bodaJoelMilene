import React from 'react'

export default function ButtonPage({text, func, }) {

    const buttonStyles = {
        padding: "0.4em 1.4em",
        fontSize: "0.9em",
        borderRadius: "1em",
        border: "none",
        color: "var(--primary-color)",
        fontWeight: 500,
        background: "var(--secondary-color)",
      };




  return (
    <button onClick={()=>func()} style={buttonStyles}>
        {text}
    </button>
  )
}
