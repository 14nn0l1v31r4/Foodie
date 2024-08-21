import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
        <h1 className="primary-heading"> Você Tem Alguma Pergunta Para a Gente?</h1>
        <h1 className="primary-heading"> Deixe a Gente Ajudar!</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="seuemail@gmail.com"></input>
            <button className="secondary-button"> Enviar</button>
        </div>
    </div>
  )
}

export default Contact