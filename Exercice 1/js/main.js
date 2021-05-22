// let rgb = document.getElementById('rgb');
// let padding = document.getElementById('padding');
// let height = document.getElementById('height');
// let width = document.getElementById('width');
// let arrondi = document.getElementById('arrondi');
// let rotation = document.getElementById('rotation');

let h1 = document.getElementById('titre');

// rgb.addEventListener('input',function(){
//      h1.style.background = `${rgb.value}`;
// },false);



function update(input) {
    console.log(input.value)
    if (input.getAttribute('id') == 'rgb') {
        h1.style.background = `rgb(${input.value},${input.value},${input.value})`;
        if (input.value < 115) {h1.style.color = `white`;}
        else if (input.value > 114) {h1.style.color = `black`;}
    } else if (input.getAttribute('id')== 'padding') {
        h1.style.padding = `${input.value}px`;
    } else if (input.getAttribute('id') == 'height') {
        h1.style.height = `${input.value}px`;
    } else if (input.getAttribute('id') == 'width') {
        h1.style.width = `${input.value}px`;
    } else if (input.getAttribute('id') == 'arrondi') {
        h1.style.borderRadius = `${input.value}px`;
    } else if (input.getAttribute('id') == 'rotation') {
        h1.style.transform = `rotate(${input.value}deg)`;
    }
}

