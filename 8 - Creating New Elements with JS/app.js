const input = document.getElementById("input")
const button = document.getElementById("submit")
let list = document.getElementsByTagName("showhide-btn");
const showhidebtn =document.getElementbyId("showhide-btn");
// button.addEventListener("click", ()=> {
//     let listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     console.log(listItem);
//     list.appendChild(listItem);    /// appendchild works like the push function with and array 
//     })
button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
    })
showhidebtn.addEventListener("click", () => {
    let list = document.getElementByTagName("ul")[0];
    if(list.style.display == "none") {
    list.style.display = "block";
    showhidebtn.textContent = "hide";
    } else {
    list.style.display = "none";
    showhidebtn.textContent = "show";
    }
    })

    //  this has not worked so you need to go back to it 