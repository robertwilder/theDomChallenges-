

document.getElementById("heading").style.color = "red";

const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");
// const drinks = document.getElementsByTagName("drinks");
const paragraphs = document.getElementsByTagName("p");
const list = document.getElementsByTagName("li");
let firstPara = paragraphs[0];
const notOrange = document.getElementsByClassName("not-orange");


button.addEventListener("click", () => {
    list.style.color = input.value;
});

for (let i = 0; i< notOrange.length; i++){
notOrange[i].style.color = "red";
}



//  for (let i = 0; i < paragraphs.length; i ++){
//     paragraphs[i].style.color = ("red");
// }


// for (let i = 0; i < list.length; i ++){
//     list[i].style.color = ("blue") ;
// }






