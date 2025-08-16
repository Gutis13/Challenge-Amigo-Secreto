let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Mostrar en la lista
  const lista = document.getElementById("listaAmigos");
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);

  // Limpiar campo
  input.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  // Elegir al azar
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar antes de mostrar uno nuevo

  const item = document.createElement("li");
  item.textContent = "🎊 El amigo secreto es: " + amigoSorteado + " 🎊";
  resultado.appendChild(item);
}
