// function x(word) {
//     let firstLetter = word.charAt(0);

//     if (firstLetter == 'a' || firstLetter == 'b' || firstLetter == 'c' ||firstLetter == 'd' || firstLetter == 'A' || firstLetter == 'B' || firstLetter == 'C' || firstLetter == 'D') {
//         return true;
//     } else {
//         return false;
//     }
// }

function x(word) {
    let firstLetter = word.toLowerCase(0);
return firstLetter == 'a' || firstLetter == 'b' || firstLetter == 'c' ||firstLetter == 'd';
        
}

console.log(x('A'));

function only(str) {
    let n = '@';
    let c = str.split(n);
    console.log(c.length);
    if(c.length == 2) {
        
        return true

    } else {
        
        return false
    }
}

console.log(only("azenlazen@@"));

function searchNumber(str) {
    let pattern = /\d/;
    if (str.search(pattern) !=-1) {
        return true;
    } else {
        return false;
    }
}

console.log(searchNumber("1sdfsf"))

function replace(str) {
    let replaced = str.replace(/\d/g,"*");
    console.log(replaced);
}

console.log(replace("77185"))