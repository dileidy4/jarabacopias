document.addEventListener("DOMContentLoaded", function() {
  const cloudButton = document.querySelector(".cloud-info-button");
  const cloudDialog = document.querySelector(".cloud-dialog");

  cloudButton.addEventListener("click", function() {
    // Hace visible el diálogo
    cloudDialog.style.display = "block";
    // Muestra el diálogo de texto
    escribirTextoPorTiempo(cloudDialog, "La empresa fue creada para ayudar a mi familia y porque me gustaba el tema de los libros, también para que las personas tengan un espacio agradable donde puedan hacer mejor sus clases o arreglar sus documentos.", 8500);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const ubicacionButton = document.querySelector(".Ubicacion");
  const ubicacionDialog = document.querySelector(".ubicacion-info");

  ubicacionButton.addEventListener("click", function() {
    // Hace visible el enlace de ubicación
    ubicacionDialog.style.display = "block";
    // Muestra el texto "Ver Ubicación"
    escribirTextoPorTiempo(ubicacionDialog, 'Ver Ubicacion', 1000); // Ahora el texto se escribirá en 1 segundos
    // Convierte el texto en un enlace después de que se haya escrito
    setTimeout(function() {
      ubicacionDialog.innerHTML = '<a href="https://www.google.com/maps/place/Seguros+Aquino+Duran/" target="_blank" class="boton-ubicacion enlace-diseño-js">' + ubicacionDialog.innerHTML + '</a>';
    }, 1000);
  });
});


// Función para escribir texto letra por letra durante un tiempo máximo
function escribirTextoPorTiempo(elemento, texto, tiempoMaximo) {
  tiempoMaximo *= 0.975; // Reduce el tiempoMaximo en un 2.5%
  const intervalo = tiempoMaximo / texto.length;
  let indice = 0;

  function escribir() {
    if (indice < texto.length) {
      elemento.innerHTML += texto.charAt(indice);
      indice++;
      setTimeout(escribir, intervalo);
    }
  }

  escribir();
}

