const usuarios = {
  admin1: "123456", 
  manolo: "1033",
  admin: "1234"
};

// Función para manejar el ingreso del usuario
function ingresar() {
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;

  if (usuarios[usuario] && usuarios[usuario] === contraseña) {
    localStorage.setItem("usuarioLogueado", usuario);
    window.location.href = "./pagina_principal.html";
  } else {
    alert("Usuario o contraseña inválidos");
  }
}

// Función para cerrar la sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioLogueado"); // Elimina usuario logueado
  window.location.href = "./index.html"; // Redirige al login
}

// Mostrar el botón de reseteo solo si el usuario es admin1
window.onload = function() {
  let usuarioLogueado = localStorage.getItem("usuarioLogueado");
  if (usuarioLogueado !== "admin1") {
    document.getElementById("resetear-btn").style.display = "none";
  }
}

// Función para resetear las sesiones
function resetearSesiones() {
  localStorage.clear(); // Elimina todas las entradas de localStorage
  alert("Todas las sesiones han sido reseteadas.");
  window.location.href = "./index.html"; // Redirige al login tras el reseteo
}
