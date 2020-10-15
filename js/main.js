let j = document.getElementById("opis");
//let k = document.querySelector("button"); nie działa
let k = document.getElementById("b1");
function opis (x){
    x.textContent("dowolny text");
}
k.onclick = opis(j);