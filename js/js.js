

const iva = 0.21;
const interes = 0.05;
var creditofinal = 0;
var prestamo = 0;
const Nombre = prompt('Dime tu nombre');
const Apellido = prompt('Dime tu apellido');

console.log('Hola ',Nombre, Apellido);


const credito = prompt('Quieres un credito? (si / no)');
if (credito === 'si') {
  const monto = prompt('Cuanto ganas?');
   var creditofinal = monto * 3;
   prompt('puedo prestarte un credito de $' + creditofinal);

   var prestamo = prompt ('¿cuanto quieres?');

}   else {
    prompt('No te preocupes');
}  

const cuotas = prompt('¿cuantas cuotas quieres? solo acepto 3, 6, 9, 12.');

if (cuotas === '3') {
  creditofinal = prestamo * iva;
}   else if (cuotas === '6') {
  creditofinal = prestamo * iva;
}   else if (cuotas === '9') {
  creditofinal = prestamo * iva;
}   else if (cuotas === '12') {  
    creditofinal = prestamo * iva;
    
}   else {
  prompt('No hay cuotas'); 
}   



console.log(Nombre + ' ' + 'la cuota  final es de: ', creditofinal);


