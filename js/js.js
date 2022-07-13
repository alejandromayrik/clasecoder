

const iva = 0.21;
const interes = 0.05;
var creditofinal = 0;
var prestamo = 0;
var Nombre;
var Apellido;


login();

function login() {
  Nombre = prompt("Ingresa tu nombre");
  Apellido = prompt("Ingresa tu apellido");
  if (Nombre === '' && Apellido === '') {
    console.log('Faltan datos');
    //login ();
  } else {
    console.log('Hola ', Nombre, Apellido);

    credito();
  }
}




function credito() {
  const pregunta = prompt('Quieres un credito? (si / no)');
  if (pregunta === 'si') {
    const monto = prompt('Cuanto ganas?');
    var creditofinal = monto * 3;
    alert('puedo prestarte un credito de $' + creditofinal);

    prestamo = parseInt(prompt('¿cuanto deseas?'));
    if (prestamo > creditofinal) {
      alert('te excediste del tope');

    } else {
      preguntarCuotas();
    }
  } else {
    prompt('No te preocupes');
  }

}



function preguntarCuotas() {
  var cuotas = (prompt("¿Cuántas cuotas deseas pagar? Solo puedes optar por 3,6,9,12"))

  if (cuotas === '3') {
    creditofinal = prestamo * iva;
  } else if (cuotas === '6') {
    creditofinal = prestamo * iva;
  } else if (cuotas === '9') {
    creditofinal = prestamo * iva;
  } else if (cuotas === '12') {
    creditofinal = prestamo * iva;

  } else {
    preguntarCuotas();
  }
}



console.log(Nombre + ' ' + 'la cuota  final es de: ', creditofinal);


