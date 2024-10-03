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

    // Permitir que "admin1" inicie sesión múltiples veces sin restricciones
    if (usuario === verificacionusuario1) {
      // Guardamos el usuario logueado en localStorage
      localStorage.setItem("usuarioLogueado", usuario);

      // Redirige a la página principal
      window.location.href = "./pagina_principal.html";
    } else {
      // Verificamos si ya hay una sesión activa para este usuario (no admin1)
      if (sesionesActivas.includes(usuario)) {
        alert("Ya hay una sesión activa para este usuario. Solo puedes iniciar sesión en una pantalla.");
      } else {
        // Almacenamos la sesión activa en localStorage
        sesionesActivas.push(usuario);
        localStorage.setItem("sesionesActivas", JSON.stringify(sesionesActivas));

        // Guardamos el usuario logueado en localStorage
        localStorage.setItem("usuarioLogueado", usuario);

        // Redirige a la página principal
        window.location.href = "./pagina_principal.html";
      }
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

// Función para resetear todas las sesiones activas
function resetearSesiones() {
  // Limpiamos todas las sesiones activas almacenadas en localStorage
  localStorage.removeItem("sesionesActivas");
  alert("Todas las sesiones activas han sido reseteadas.");
}

// Mostrar el botón de reseteo solo si el usuario es admin1
window.onload = function() {
  let usuarioLogueado = localStorage.getItem("usuarioLogueado"); // Almacena el usuario logueado en localStorage
  if (usuarioLogueado !== "admin1") {
    document.getElementById("resetear-btn").style.display = "none"; // Ocultamos el botón si no es admin
  }
}


  