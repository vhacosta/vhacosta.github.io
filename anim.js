// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 25 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 41 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 52 },
  { text: "No te apures, no detengas el instante del encuentro", time: 60 }, 
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 64 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 68 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101 }, // Corregido: 102 -> 101
  { text: "Él se acercó de repente y la miró tan de frente", time: 109 }, // Corregido: 110 -> 109
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 }, // Corregido: 117 -> 116
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 123 }, // Corregido: 124 -> 123
  { text: "Que vendría a buscarla con sus flores amarillas", time: 126 }, // Corregido: 127 -> 126
  { text: "No te apures, no detengas el instante del encuentro", time: 135 }, // Corregido: 136 -> 135
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 139 }, // Corregido: 140 -> 139
  { text: "No te olvides que la vida casi nunca está dormida", time: 143 }, // Corregido: 144 -> 143
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 168 }, // Corregido: 169 -> 168
  { text: "Que vendría a buscarla con sus flores amarillas", time: 171 }, // Corregido: 172 -> 171
  { text: "No te apures, no detengas el instante del encuentro", time: 181 }, // Corregido: 182 -> 181
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 185 }, // Corregido: 186 -> 185
  { text: "No te olvides que la vida casi nunca está dormida", time: 188 }, // Corregido: 189 -> 188
  { text: "Ella sabía que él sabía, él sabía, ella sabía, que él sabía, que él ya sabía y se olvidaron de sus flores amarillas", time: 217 }, // Corregido: 218 -> 217
];

// Animar las letras
function updateLyrics() {
  const time = Math.floor(audio.currentTime);
  let currentLine = null;

  // Encuentra la línea actual con mayor precisión
  for (let i = 0; i < lyricsData.length; i++) {
    const line = lyricsData[i];
    if (time >= line.time) { 
      // Encuentra la línea que coincide con el tiempo actual
      currentLine = line;
    } else if (currentLine) {
      // Si ya se encontró una línea y el tiempo actual es menor
      // que el tiempo de la siguiente línea, se detiene la búsqueda
      break; 
    }
  }

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 250); // Actualiza con más frecuencia para una mejor sincronización

// Función para ocultar el título
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.opacity = 0; // Desvanece el título
  setTimeout(function() {
    titulo.style.display = "none"; // Oculta el título completamente después de la animación
  }, 1000); // Ajusta el tiempo de espera según la duración de la animación
}

// Llama a la función ocultarTitulo después de 17 segundos
setTimeout(ocultarTitulo, 16000); 