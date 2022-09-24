// local leaders data
const leaders = [
{
    id: 1,
    name: "Cesar Chavez",
    job: "Civil Right Leader",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cesar_Chavez_40915a.tif/lossy-page1-220px-Cesar_Chavez_40915a.tif.jpg",
    text: "Cesar Chavez, born Cesario Estrada Chavez, March 31, 1927 - April 23, 1993, was American labor leader and civil rights activist. Along with Dolores Huerta, he co-founded the National Farm Workers Association (NFWA), which later merged with the Agricultural Workers Organizing Committee (AWOC) to become the United Farm Workers (UFW) labor union. Ideologically, his world-view combined leftist politics with Catholic social teachings."
},
{
    id: 2,
    name: "Dolores Huerta",
    job: "Civil Right Activist",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dolores_Huerta_2019_cropped.jpg/220px-Dolores_Huerta_2019_cropped.jpg",
    text: "Dolores Clara Fernandez Huerta, born April 10, 1930 is an American labor learder and civil rights  activist who, with Cesar Chavez, is a co-founder of the National Farmworkers Association, which later merged with the Agricultural Workers Organizing Committee to become the United Farm Workers (UFW)."
},
{
    id: 3,
    name: "Sonia Sotomayer",
    job: "Associate Justice of the Supreme Court",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sonia_Sotomayor_in_SCOTUS_robe.jpg/220px-Sonia_Sotomayor_in_SCOTUS_robe.jpg",
    text: "Sonia Maria Sotomayor, born June 25 1954 is an American lawyer and jurist who serves as an associate justice of the Supreme Court of the United States. She was nominated by President Barack Obama on May 26, 2009, and has served since August 8, 2009. She is the third woman, first woman of color, the first Hispanic, and first Latina to serve on the Supreme Court."
},
{
    id: 4,
    name: "Roberto Enrique Clemente Walker",
    job: "Professional Baseball Right Fielder",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roberto_Clemente_1965.jpg/220px-Roberto_Clemente_1965.jpg",
    text: "Robert Enrique Clemente Walker, born August 18, 1934 - December 31, 1972, was a Puerto Rican professional baseball right fielder who played 18 seasons in Major League Baseball (MLB) for the Pittsburgh Pirates. After his early death, he was posthumously inducted into the National Baseball Hall of Fame in 1973, becoming both the first Caribbean and the first Latin-American player to be enshrined. Because he died at a young age and had such a stellar career, the Hall of Fame changed its rules of eligibility. As an alternative to a player having to be retired for five years before eligibility, a player who has been deceased for at least six months is eligible for entry."
},
{
    id: 5,
    name: "Ellen Ochoa",
    job: "American Engineer, Astronaut, and Director of the Johnson Space Center",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ellen_Ochoa.jpg/220px-Ellen_Ochoa.jpg",
    text: "Ellen Ochoa, born May 10, 1958 is an American engineer, former astronaut and former director of the Johnson Space Center.[1] In 1993, Ochoa became the first Hispanic woman to go to space when she served on a nine-day mission aboard the Space Shuttle Discovery.[2] Ochoa became director of the center upon the retirement of the previous director, Michael Coats, on December 31, 2012.[3] She was the first Hispanic director and the second female director of Johnson Space Center."
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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pancho_villa_horseback.jpg/220px-Pancho_villa_horseback.jpg",
    text: "Francisco Pancho Villa"
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

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = leaders[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person){
    const item = leaders[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > leaders.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = leaders.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * leaders.length);
    showPerson(currentItem);
  });
