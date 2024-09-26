// function ingresar() {
//     let usuario = document.getElementById("usuario").value;
//     let contraseña = document.getElementById("contraseña").value;
//     let verificacionusuario1 = "admin1";
//     let verificacioncontraseña1 = "123456";
//     let verificacionusuario2 = "admin";
//     let verificacioncontraseña2 = "admin1234";
//     let verificacionusuario3 = "admin";
//     let verificacioncontraseña3 = "admin1234";
  
//     // Verificación de usuario y contraseña
//     if (
//       (usuario === verificacionusuario1 &&
//         contraseña === verificacioncontraseña1) ||
//       (usuario === verificacionusuario2 && contraseña === verificacioncontraseña2 &&  verificacionusuario3 === verificacioncontraseña3 )
//     ) {
//       // Redirige a otra página si las credenciales son correctas
//       window.location.href = "./pagina_principal.html";
//     } else {
//       // Muestra alerta si las credenciales son incorrectas
//       alert ("Usuario o contraseña inválidos");
      
//     }
//   }



// Variables de verificación
let verificacionusuario1 = "admin1";
let verificacioncontraseña1 = "123456";
let verificacionusuario2 = "admin";
let verificacioncontraseña2 = "admin1234";

// Aquí almacenaríamos las sesiones activas. Puedes usar localStorage o sesiones del lado del servidor
let sesionesActivas = [];

// Función para manejar el ingreso del usuario
function ingresar() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  // Verificación de usuario y contraseña
  if (
    (usuario === verificacionusuario1 && contraseña === verificacioncontraseña1) ||
    (usuario === verificacionusuario2 && contraseña === verificacioncontraseña2)
  ) {
    // Verificamos si ya hay una sesión activa para este usuario
    if (sesionesActivas.includes(usuario)) {
      alert("Ya hay una sesión activa para este usuario. Solo puedes iniciar sesión en una pantalla.");
    } else {
      // Almacenamos la sesión activa
      sesionesActivas.push(usuario);

      // Redirige a la página principal si las credenciales son correctas
      window.location.href = "./pagina_principal.html";
    }
  } else {
    // Muestra alerta si las credenciales son incorrectas
    alert("Usuario o contraseña inválidos");
  }
}

// Función para cerrar la sesión
function cerrarSesion(usuario) {
  const index = sesionesActivas.indexOf(usuario);
  if (index > -1) {
    sesionesActivas.splice(index, 1); // Eliminamos la sesión activa
  }
}

// Ejemplo para cerrar sesión en otra parte del código
// cerrarSesion('admin'); // Llama esta función al hacer logout

  