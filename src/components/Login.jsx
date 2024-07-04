import React, { useState } from 'react';
import { Link } from 'react-router-dom';;
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Intentando iniciar sesión con:', email, password);
      await signInWithEmailAndPassword(auth, email, password); 
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.code, error.message);
    }
  };

  return (
    <div className="container-login">
      <div className="div-login d-flex justify-content-center m-5">
        <div className="login rounded text-white bg-white p-5">
          <div className='d-flex justify-content-center'>
            <h2 className="text-primary">Iniciar Sesión</h2>
          </div> 
          <div className="logo-login">
            <img src="/img/logo-gaming.png" alt="" width="100%"/>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3 gap-2">
              <label className='text-dark'>Email:</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className='text-dark'>Contraseña:</label>
              <input type="password" className="form-control" id="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="div-boton gap-3">
              <button type="submit" className="button" id="btnLogIn" onClick={handleLogin}>Iniciar sesión</button> {/* Cambiado type="button" por type="submit" */}
              <Link to="/registro">¿No tienes una cuenta? Regístrate</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;