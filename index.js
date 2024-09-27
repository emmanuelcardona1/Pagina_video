



let verificacionusuario1 = "admin1";
let verificacioncontraseña1 = "123456";
let verificacionusuario2 = "admin";
let verificacioncontraseña2 = "1234";

// Función para manejar el ingreso del usuario
function ingresar() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  // Verificación de usuario y contraseña
  if (
    (usuario === verificacionusuario1 && contraseña === verificacioncontraseña1) ||
    (usuario === verificacionusuario2 && contraseña === verificacioncontraseña2)
  ) {
    let sesionesActivas = JSON.parse(localStorage.getItem("sesionesActivas")) || [];

    // Verificamos si ya hay una sesión activa para este usuario
    if (sesionesActivas.includes(usuario)) {
      alert("Ya hay una sesión activa para este usuario. Solo puedes iniciar sesión en una pantalla.");
    } else {
      // Almacenamos la sesión activa en localStorage
      sesionesActivas.push(usuario);
      localStorage.setItem("sesionesActivas", JSON.stringify(sesionesActivas));

      // Redirige a la página principal si las credenciales son correctas
      window.location.href = "./pagina_principal.html";
    }
  } else {
    alert("Usuario o contraseña inválidos");
  }
}

// Función para cerrar la sesión
function cerrarSesion(usuario) {
  let sesionesActivas = JSON.parse(localStorage.getItem("sesionesActivas")) || [];
  const index = sesionesActivas.indexOf(usuario);
  if (index > -1) {
    sesionesActivas.splice(index, 1); // Eliminamos la sesión activa
    localStorage.setItem("sesionesActivas", JSON.stringify(sesionesActivas));
  }
}


  