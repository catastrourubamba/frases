(function () {
  const frases = [
    {
      frase:
        "Podrán cortar todas las flores, pero no podrán detener la primavera",
      autor: "Pablo Neruda",
      imagen: "./images/img02.png",
    },
    {
      frase:
        "Estar solo no tiene nada que ver con cuantas personas hay alrededor",
      autor: "Richard Yates",
      imagen: "./images/img03.jpg",
    },
    {
      frase:
        "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación",
      autor: "Arthur Conan Doyle",
      imagen: "./images/img04.jpg",
    },
    {
      frase: "Si buscas la perfección nunca estarás contento",
      autor: "Leo Tolstoy",
      imagen: "./images/img01.png",
    },
    {
      frase: "La violencia es el miedo a los ideales de los demás.",
      autor: "Mahatma Gandhi",
      imagen: "./images/img05.jpg",
    },
    {
      frase:
        "Los sabios son los que buscan la sabiduría; los necios piensan ya haberla encontrado.",
      autor: "Napoleón Bonaparte",
      imagen: "./images/img07.png",
    },
    {
      frase:
        "Lo menos frecuente en este mundo es vivir. La mayoría de la gente existe, eso es todo.",
      autor: "Oscar Wilde",
      imagen: "./images/img06.jpg",
    },
    {
      frase:
      "Todos tus sueños pueden hacerse realidad si tienes el coraje de perseguirlos.",
      autor: "Walt Disney",
      imagen: "./images/img08.png",
    },
    {
      frase:
      "Nunca me tomé un día libre en mis 20. Ni uno.",
      autor: "Bill Gates",
      imagen: "./images/img09.png",
    },
    {
      frase:
      "Es más divertido hacerse pirata que unirse a la marina.",
      autor: "Bill Gates",
      imagen: "./images/img10.png",
    },
    {
      frase:
      "Siempre entrega más de lo esperado",
      autor: "Larry Page",
      imagen: "./images/img11.png",
    },
    {
      frase:
      "Trabaja duro, diviértete, haz historia.",
      autor: "Jeff Bezos ",
      imagen: "./images/img12.png",
    },
  ];

  const frase = document.querySelector(".frase");
  const autor = document.querySelector(".autor");
  const imagen = document.querySelector(".img");
  const boton = document.querySelector(".boton");

  boton.addEventListener("click", nuevaFrase);

  function nuevaFrase() {
    let numeroRandom = Math.floor(Math.random() * frases.length);

    frase.innerHTML = `"${frases[numeroRandom].frase}"`; //template string para simplificar
    autor.innerHTML = frases[numeroRandom].autor;
    imagen.src = frases[numeroRandom].imagen;
  }
})();
