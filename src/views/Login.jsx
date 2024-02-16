import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import usuariosJSON from '../assets/usuarios.json'; // base de prueba para probar la funcionalidad de frontend
import { useContext } from 'react';
import userContext from '../context/userContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  // Estas funciones se utilizan para manejar los cambios en los campos de entrada del usuario y actualizar el estado correspondiente (username y password).
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
// Esta función se llama cuando el formulario se envía. Primero, previene el comportamiento predeterminado del formulario usando event.preventDefault(). Luego, realiza validaciones en los campos de entrada y realiza la autenticación del usuario.
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar si se ingresó un usuario y una contraseña
    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor ingrese un usuario y una contraseña.");
      return;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Buscar el usuario en el JSON
    const user = usuariosJSON.find(
      (u) => u.usuario === username && u.password === password
    );

    if (user) {
      // Usuario autenticado correctamente
      localStorage.setItem('usuarioAutenticado', JSON.stringify(user));
      setUser(user);
      // Redirigir a la página correspondiente
      if (user.rol === "Administrador") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } else {
      // Credenciales incorrectas
      alert("Credenciales incorrectas. Por favor, verifique su usuario y contraseña.");
    }
  };

  return (
    <div className='loginpage vh-100  p-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Usuario</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Ingrese su email'
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
