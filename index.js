// Task 1
let button = document.getElementById('btn')
let text = document.getElementById('text')

function removeBlock(){
    text.style.display='none';
}
button.addEventListener('click', removeBlock)


//  Task 2
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);