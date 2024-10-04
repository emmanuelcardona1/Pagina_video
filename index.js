const verificacionusuario1 = "admin1";
const verificacioncontraseña1 = "123456";
const verificacionusuario2 = "admin";
const verificacioncontraseña2 = "1234";

// Función para manejar el ingreso del usuario
function ingresar() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  if (
    (usuario === verificacionusuario1 && contraseña === verificacioncontraseña1) ||
    (usuario === verificacionusuario2 && contraseña === verificacioncontraseña2)
  ) {
    let sesionesActivas = getCookie("sesionesActivas") ? JSON.parse(getCookie("sesionesActivas")) : [];

    if (usuario === verificacionusuario1 || !sesionesActivas.includes(usuario)) {
      if (usuario !== verificacionusuario1) {
        sesionesActivas.push(usuario);
        setCookie("sesionesActivas", JSON.stringify(sesionesActivas), 1);
      }
      setCookie("usuarioLogueado", usuario, 1);
      window.location.href = "./pagina_principal.html";
    } else {
      alert("Ya hay una sesión activa para este usuario. Solo puedes iniciar sesión en una pantalla.");
    }
  } else {
    alert("Usuario o contraseña inválidos");
  }
}

// Función para cerrar la sesión
function cerrarSesion() {
  let usuario = getCookie("usuarioLogueado");
  let sesionesActivas = getCookie("sesionesActivas") ? JSON.parse(getCookie("sesionesActivas")) : [];
  const index = sesionesActivas.indexOf(usuario);
  if (index > -1) {
    sesionesActivas.splice(index, 1);
    setCookie("sesionesActivas", JSON.stringify(sesionesActivas), 1);
  }
  setCookie("usuarioLogueado", "", -1); // Elimina cookie de usuario logueado
}

// Función para resetear todas las sesiones activas
function resetearSesiones() {
  setCookie("sesionesActivas", "", -1);
  alert("Todas las sesiones activas han sido reseteadas.");
}

// Mostrar el botón de reseteo solo si el usuario es admin1
window.onload = function() {
  let usuarioLogueado = getCookie("usuarioLogueado");
  if (usuarioLogueado !== "admin1") {
    document.getElementById("resetear-btn").style.display = "none";
  }
}

// Funciones para gestionar cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
