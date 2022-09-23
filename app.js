// local leaders data 
const leaders = [
{
    id: 1,
    name: "Cesar Chavez",
    job: "Civil Right Leader",
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
},
{
    id: 2,
    name: "Dolores Huerta",
    job: "Civil Right Leader",
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
},
{
    id: 3,
    name: "Cesar Chavez",
    job: "Civil Right Leader",
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
},
{
    id: 4,
    name: "Cesar Chavez",
    job: "Civil Right Leader"
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
}
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn =  document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item 
window.addEventListener("DOMContentLoaded", function() {
    const item = leaders[currentItem];
    img.src = item.img;
})
