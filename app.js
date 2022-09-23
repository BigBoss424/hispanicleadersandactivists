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
    name: "Sonia Sotomayer",
    job: "Civil Right Leader",
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
},
{
    id: 4,
    name: "Roberto Clemente",
    job: "Civil Right Leader",
    img: "#",
    text: "Cesar Chavez, born Cesario Estrada Chavez."
},
{
    id: 5,
    name: "Ellen Ochoa",
    job: "#",
    img: "#",
    text: "Ellen Ochoa"
},
{
    id: 6,
    name: "Pablo Alvarado",
    job: "#",
    img: "#",
    text: "Pablo Alvarado"
},
{
    id: 7,
    name: "Arturo Alfonso Schambrury",
    job: "#",
    img: "#",
    text: "Arturo Alfonso Schambrury"
},
{
    id: 8,
    name: "Ellen Ochoa",
    job: "#",
    img: "#",
    text: "Ellen Ochoa"
},
{
    id: 9,
    name: "Pancho Villa",
    job: "#",
    img: "#",
    text: "Pancho Villa"
},
{
    id: 10,
    name: "Juan Felipe Herrera",
    job: "#",
    img: "#",
    text: "Juan Felipe Herrera"
}
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person){
    const item = leaders[person];
    img.src = item.img;
    author.textContent = item.job;
    info.textContent = item.text;
}
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
