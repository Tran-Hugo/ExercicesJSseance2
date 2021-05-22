

function table() {
    let n = prompt('Nombre entier ou taper "tableau"');
    let isInteger = Number.isInteger(Number(n));
    
    if (isInteger) {
        document.write(`<table border='1'><tr>`)
        for (i=1; i <=10; i++){
        document.write(`<th>${n*i}</th>`)
        }
        document.write(`</tr>`)
    } else if (n == 'tableau') {
        document.write(`<table border='1'>`);
        for (i=1; i <=10; i++){
            document.write(`<tr>`)
            for (j=1; j<=10;j++) {
                document.write(`<th>${i*j}</th>`)
                console.log(i,j);
            }
            document.write('</tr>')
            }
    
    } else {
    alert(`ce n'est pas un entier`);
        table()
    }
}

table(); 