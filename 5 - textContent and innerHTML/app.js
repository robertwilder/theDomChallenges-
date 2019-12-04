const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// submit.addEventListener("click", () =>{
//     placeholder.style.color ="goldenrod";
//     placeholder.textContent = input.value;
//     })

submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
    list.innerHTML += `<li>${input.value}</li>`;

    })

// if it takes user input then there is a potential that someone could inject code in to the box. runs a data protection risk