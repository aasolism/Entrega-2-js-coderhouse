// Lista de partidos con imágenes
const partidos = [
  { nombre: "Real San Joaquín vs San Antonio Unido", fecha: "Sábado 14 de septiembre", hora: "12:00", lugar: "Estadio Municipal de San Joaquín", precioGeneral: 5000, precioVIP: 10000, imagen: './img/p1.png' },
  { nombre: "Deportes Melipilla vs Rengo", fecha: "Sábado 14 de septiembre", hora: "15:00", lugar: "Estadio Soinca Bata", precioGeneral: 5500, precioVIP: 11000, imagen: './img/p2.png' },
  { nombre: "Deportes Linares vs Provincial Osorno", fecha: "Sábado 14 de septiembre", hora: "17:30", lugar: "Estadio Fiscal Tucapel Bustamante", precioGeneral: 5000, precioVIP: 10000, imagen: './img/p3.png' },
  { nombre: "Deportes Puerto Montt vs Lautaro de Buín", fecha: "Domingo 15 de Septiembre", hora: "12:00", lugar: "Estadio Bicentenario Chinquihue", precioGeneral: 4500, precioVIP: 9000, imagen: './img/p4.png' },
  { nombre: "General Velásquez vs Fernández Vial", fecha: "Domingo 15 de Septiembre", hora: "15:00", lugar: "Estadio Municipal Augusto Rodríguez", precioGeneral: 5500, precioVIP: 11000, imagen: './img/p5.png' },
  { nombre: "Deportes Concepción vs Trasandino", fecha: "Domingo 15 de Septiembre", hora: "17:30", lugar: "Estadio Ester Roa Rebolledo", precioGeneral: 5500, precioVIP: 11000, imagen: './img/p6.png' },
  { nombre: "Concón National vs Provincial Ovalle", fecha: "Domingo 29 de Septiembre", hora: "15:00", lugar: "Por Confirmar", precioGeneral: 5000, precioVIP: 10000, imagen: './img/p7.png' }
];

let cart = [];

// Elementos del DOM
const eventCardsContainer = document.getElementById('event-cards');

// Cargar la lista de partidos como tarjetas
function cargarPartidos() {
  eventCardsContainer.innerHTML = partidos.map((partido, index) => `
      <div class="event-card">
          <img src="${partido.imagen}" alt="${partido.nombre}" class="event-img">
          <h3>${partido.nombre}</h3>
          <p>${partido.fecha} - ${partido.hora}</p>
          <p>Estadio: ${partido.lugar}</p>
          <p>Precio General: $${partido.precioGeneral} | VIP: $${partido.precioVIP}</p>
          
          <label for="cantidad-${index}">Cantidad de entradas:</label>
          <input type="number" id="cantidad-${index}" min="1" value="1">
          
          <label for="tipo-${index}">Tipo de entrada:</label>
          <select id="tipo-${index}">
              <option value="general">General</option>
              <option value="vip">VIP</option>
          </select>

          <button class="ctn" onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
          <button class="ctn" onclick="verCarrito()">Ver Carrito</button>
      </div>
  `).join('');
}

// Función para agregar al carrito
function agregarAlCarrito(index) {
  const partidoSeleccionado = partidos[index];
  const cantidad = parseInt(document.getElementById(`cantidad-${index}`).value);
  const tipoEntrada = document.getElementById(`tipo-${index}`).value;  // Recoger el tipo de entrada (general o VIP)
  const precio = tipoEntrada === 'vip' ? partidoSeleccionado.precioVIP : partidoSeleccionado.precioGeneral;
  const total = precio * cantidad;

  cart.push({ partido: partidoSeleccionado.nombre, tipo: tipoEntrada, cantidad, total });
  guardarCarrito();
}

// Guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para ver el carrito
function verCarrito() {
  window.location.href = "./pages/carrito.html";  // Redirigir a la página del carrito en la carpeta "pages"
}

// Cargar la página
window.onload = cargarPartidos;

