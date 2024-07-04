import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {  createUserWithEmailAndPassword } from 'firebase/auth';


const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegistro = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuario registrado exitosamente');
      } catch (error) {
        console.error('Error al registrar usuario:', error.message);
      }
    };

    return (
      <div className="container-login">
        <div className="div-login  d-flex justify-content-center m-5 ">
          <div className="login rounded text-white bg-white p-5 ">
            <div className='d-flex justify-content-center'>
              <h2 className="text-primary">Registrarse</h2>
            </div> 
            <div className="logo-login">
              <img src="/img/logo-gaming.png" alt="" width="100%" className='d-flex justify-content-center'/>
            </div>
            <form onSubmit={handleRegistro}>
              <div className='d-flex gap-3'>
                <div className="mb-3 gap-2">
                  <label className='text-dark'>Nombre:</label>
                  <input type="text" className="form-control" id="nombre" placeholder="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3 gap-2">
                  <label className='text-dark'>Apellido:</label>
                  <input type="text" className="form-control" id="apellido" placeholder="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>
              </div>
              <div className="mb-3 gap-2">
                <label className='text-dark'>Email:</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className='text-dark'>Contraseña:</label>
                <input type="password" className="form-control" id="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="div-boton gap-3">
                <button type="submit" className="button" id="btnRegistro">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Registro;