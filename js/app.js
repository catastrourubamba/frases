(function () {
  
const frases = [
  {
    frase:
      "No poner puntos en casilleros rojos.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
  
    {
    frase:
      "Cuando hay mas de 10 puertas y no deje de ingresar, avisar a los administradores de la base de datos.⚠️",
    autor: "Tips <b>Nuevo!!!&#128077</b>",
    imagen: "./images/ok.svg",
  },
      {
    frase:
      "No se olviden en los edificas las entradas se reinician.⚠️",
    autor: "Tips <b>Nuevo!!!&#128077</b>",
    imagen: "./images/ok.svg",
  },
    {
    frase:
      "Poner el codigo de ficha en las fichas de bienes comunes y cotitular.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
    {
    frase:
      "En fichas cotitulares no deja modificar areas construidas, avisar al administrador de la base de datos.⚠️",
    autor: "Tips <b>Nuevo!!!&#128077</b>",
    imagen: "./images/ok.svg",
  },
    {
    frase:
      "Tener mucho cuidado en subir fichas cotitulares las fotos.📷, sera una ficha 🚫",
    autor: "Tips <b>Nuevo!!!</b>",
    imagen: "./images/ok.svg",
  },
    {
    frase:
      "En La Ficha Cotittular Sólo Permite Un Máximo De 10 Titulares, El Resto Llenar En Observaciones.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
      {
    frase:
      "En ficha de bienes comunes en recp_bbcc llenar todos lo campos, en edificio poner 11, 12, 12.⚠️",
    autor: "Tips <b>Nuevo!!!</b> &#9989",
    imagen: "./images/ok.svg",
  },
  
    {
    frase:
      "En obras complementarias siempre llenar en dimensiones.⚠️",
      autor: "Tips <b>Nuevo!!!</b>",
      imagen: "./images/ok.svg",
  },
  {
    frase:
      "Caracteres como las Ñ, S/N, tildes,  un tips es copiarlo a un bloc de notas y pegarlo.⚠️",
      autor: "Tips",
      imagen: "./images/ok.svg",
  },
      {
    frase:
      "En Construcciones por favor revisar 2 veces, en la segunda la guarda.⚠️",
    autor: "Tips <b>Nuevo!!!</b>",
    imagen: "./images/ok.svg",
  },
  {
    frase:
      "El número de DNI es un campo obligatorio si no tiene por favor llenar con el número de la ficha.⚠️",
      autor: "Tips",
      imagen: "./images/ok.svg",
  },
  {
    frase: "En la Ficha Cotittular sólo permite un máximo de 10 titulares, el resto llenar en observaciones.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
  {
    frase:
      "Observaciones muy largas mayores a 500 caracteres no guarda la ficha.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
  {
    frase:
      "Fotos mayor a 2 mb no sube, asegúrese de bajarle calidad con la app iloveimg en la web.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
  {
    frase:
    "No confundirse en el código de referencia catastral, será una ficha eliminada.⚠️",
    autor: "Tips General",
    imagen: "./images/ok.svg",
  },
  {
    frase:
    "No se olvide el CUC  en una ficha individual es el mismo de la base gráfica.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
  {
    frase:
    "En los casilleros de construcciones no se olvide de poner 01, 02 en los pisos.⚠️",
    autor: "Tips",
    imagen: "./images/ok.svg",
  },
    {
    frase:
    "Errores, Visor GIS, Producitvidad,... Se Encuentra En El Menu Informacion Grafica.☝",
    autor: "Tips <b> Nuevo!!!</b> 📷 &#128246",
    imagen: "./images/ok.svg",
  },
  
];
  

  const frase = document.querySelector(".frase");
  const autor = document.querySelector(".autor");
  const imagen = document.querySelector(".img");
  const boton = document.querySelector(".boton");

  boton.addEventListener("click", nuevaFrase);

  function nuevaFrase() {

    if(frases.length){

      let random = Math.floor(Math.random() * frases.length);
      frase.innerHTML = `"${frases[random].frase}"`;
      autor.innerHTML = frases[random].autor;
      imagen.src = frases[random].imagen;
      frases.splice(random, 1);

    }
    else {
      frase.innerHTML = " &#128153 Urubamba &#128153 Es Unico!!!";
      autor.innerHTML = "&#128170 Sistema de Fichas Catastrales &#128170";
      imagen.src = "./images/tips1.svg";

  }
}})();
