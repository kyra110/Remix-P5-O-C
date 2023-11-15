// @ts-nocheck
/*******carrousel JS********/
/*Tableau pour faire la boucle for*/
const arrayCats = [
  {
    imageUrl: "image/cat1.png",
    title: "Cat 1",
  },
  {
    imageUrl: "image/cat2.png",
    title: "Cat 2",
  },
  {
    imageUrl: "image/cat3.png",
    title: "Cat 3",
  },
  {
    imageUrl: "image/cat4.png",
    title: "Cat 4",
  },
];
console.log(arrayCats);
//Les variables globales
const dots = document.querySelector(".dots");
const arrowRigth = document.querySelector(".fa-chevron-right");
const arrowLeft = document.querySelector(".fa-chevron-left");
const img = document.querySelector(".container-carrousel img");
const h2 = document.querySelector(".container-carrousel h2");
let index = 0;

function main() {
  displayDots();
  clickRight();
  clickLeft();
}
main();

//affichage des dots
function displayDots() {
  for (let i = 0; i < arrayCats.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}

/*Affichage au click Droit*/
function clickRight() {
  arrowRigth.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    index++;
    if (index > arrayCats.length - 1) {
      index = 0;
    }
    img.src = arrayCats[index].imageUrl;
    h2.textContent = arrayCats[index].title;
    arrayDots[index].classList.add("dot_selected");
  });
}

/*Affichage au click Gauche*/
function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dots .dot");
    arrayDots[index].classList.remove("dot_selected");
    index--;
    if (index < 0) {
      index = arrayCats.length - 1;
    }
    img.src = arrayCats[index].imageUrl;
    h2.textContent = arrayCats[index].title;
    arrayDots[index].classList.add("dot_selected");
  });
}
