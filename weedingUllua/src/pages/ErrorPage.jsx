import React from 'react'

export default function ErrorPage() {
  const styles = {
    height: '100vh',
    width : '100vw',
    display: 'flex',
    justifyContent : 'center',
    alignItems:'center',
    fontFamily:'Lora, serif',
    textAlign:'center',
    paddingInline:'2em'
  }
  return (
    <div style={styles}>
      Ocurrió un error por favor contacta a Sabrina y Lucas
    </div>
  )
}
