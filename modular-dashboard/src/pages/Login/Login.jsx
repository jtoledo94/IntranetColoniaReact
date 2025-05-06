import React, { useState } from 'react'
import styles from "./Login.module.css"

const Login = () => {

  const [userInput, setUserInput] = useState(""); 
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`Usuario:${userInput} Contraseña: ${password}`);
  }

  return (
    <div className={styles.login}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
          type="text" 
          placeholder='Usuario (email o dni)' 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required />
        </div>
        <div>
          <input 
          type="password" 
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required />
        </div>

        <button type='submit'>Ingresar</button>
      </form>
    {errorMessage && <p className='error'>{errorMessage}</p>}
    </div>
  )
}

export default Login