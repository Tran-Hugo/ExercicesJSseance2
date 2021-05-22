let arrayName = [];


function addName() {
    let addedName = prompt('nom');
    arrayName.push(addedName);
}

function random() {
    let randomName = arrayName[Math.floor(Math.random()*arrayName.length)];
    alert(randomName);
}