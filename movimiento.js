//Zona de variables


function movimiento(fila,columna) {
  if (((fila>=1)&&(fila<=6)&&(columna>=1)&&(columna<=6))) {

    return true;

  }

    if((1>fila)||(fila>6)){
     return false;

  }


   if((1>columna)||(columna>6)){
     return false;


  }


}

var fila = parseInt(prompt("Introduce la fila")) ;
var columna = parseInt(prompt("Introduce la columna"));
movimiento = movimiento(fila,columna);
//Comprobamos si es verdadero o falso
console.log(movimiento);
