//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //Allows you to see the movement of the mouse
  console.log(xAxis, yAxis);
});