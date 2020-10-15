let paragraf = document.getElementById('opis');
let buton = document.querySelector('button');

function opis (x){
    x.textContent = 'dowolny text';
}
buton.onclick = function() { opis(paragraf) };

/*document.querySelector('button').onclick = function() {
    paragraf.textContent = 'dowolny text';
   
}
*/