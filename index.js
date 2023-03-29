//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const merch = document.querySelector(".merch img");
const buy = document.querySelector(".buy button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", ({ pageX, pageY }) => {
    const { top: topIndent, left: leftIndent, width, height } = container.getBoundingClientRect();
    let xAxis = -((pageX - leftIndent) - width / 2) / 40;
    let yAxis = ((pageY - topIndent) - height / 2) / 40;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //Allows you to see the movement of the mouse
  console.log(xAxis, yAxis);
});
//Animate In
container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    merch.style.transform = "translateZ(200px) rotateZ(10deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    buy.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    merch.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    buy.style.transform = "translateZ(0px)";
});