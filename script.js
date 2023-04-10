const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

async function getJock() {
  const jokeData = await fetch("https://animechan.vercel.app/api/random")
  .then((response) => response.json())
  .then(obj => jokeDiv.innerHTML = obj.quote)

}