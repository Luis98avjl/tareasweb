/*Boton clickeado */
document.getElementById("miBoton").addEventListener("click", function(){
    alert("Haz clickeado el botón");
  });
/*Evento presion de una tecla */
  document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      alert("Presionaste la tecla Enter");
    }
  });
/*Evento de anuncio de pagina cargada*/
  window.addEventListener("load", function(){
    alert("La página ha sido cargada");
  });
/*Evento de anuncio formulario enviado*/
  document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
      alert("Formulario enviado");
});

var miCuadro = document.getElementById("miCuadro");
		miCuadro.addEventListener("mouseenter", function(){
			miCuadro.style.backgroundColor = "green";
		});
		miCuadro.addEventListener("mouseout", function(){
			miCuadro.style.backgroundColor = "blue";
		});

    const inputBusqueda = document.getElementById('busqueda');
    const listaResultados = document.getElementById('resultados-busqueda');
    
    inputBusqueda.addEventListener('input', () => {
      const busqueda = inputBusqueda.value.toLowerCase();
      const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
    
      // Limpiamos los resultados previos
      listaResultados.innerHTML = '';
    
      // Mostramos los nuevos resultados
      resultados.forEach(resultado => {
        const elementoResultado = document.createElement('li');
        elementoResultado.textContent = resultado.nombre;
        listaResultados.appendChild(elementoResultado);
      });
    });
    const productos = [
      {
        nombre: 'Tacos de asada'
      },
      {
        nombre: 'Tacos de carnitas'
      },
      {
        nombre: 'Tacos de aire'
      },
      {
        nombre: 'Bagel Spicy'
      },
      {
        nombre: 'Bagel de jamon'
      },
      {
        nombre: 'Bagel de queso'
      },
      {
        nombre: 'Bagel de pan'
      },
      // Agrega más productos aquí
    ];