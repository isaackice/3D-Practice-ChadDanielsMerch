//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 30;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //Allows you to see the movement of the mouse
  console.log(xAxis, yAxis);
});
//Animate In
container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
});

//Animate Out
container.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});