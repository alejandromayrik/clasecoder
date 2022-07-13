const limiteDeCredito = 2.5;
const tasaDeInteres = 89;
const interesMensual = tasaDeInteres / 12;
let credito = 0;

function preguntarSiquiereUnCredito(){
  var respuesta = prompt("¿Quieres un crédito?")
  if(respuesta == "si"){
    let ingreso = preguntarCualEsTuIngreso()
    calcularLimiteCredito(ingreso)
    const operacion = preguntarCuantoDeseaRecibir()
    mostrarInfoOperacion(operacion)
  }else{
    alert("¡Cagate, la vida es cruda, tengo créditos!")
  }
  saludarAlClienteAlFinal()
}



function saludarAlClienteAlFinal(){
  alert("¡Gracias por tu preferencia!")
}

function preguntarCualEsTuIngreso(){
  let ingreso = parseInt(prompt("¿Cuál es tu ingreso?"))
  return ingreso
}

function calcularLimiteCredito(ingreso){
  credito = ingreso * limiteDeCredito
}

function preguntarCuantoDeseaRecibir(){

  let monto = parseInt(prompt("¿Cuánto deseas recibir? Acepto hasta $" + credito))
  if(monto <= credito){
    let cuotas = cuantasCuotasDeseaPagar()
    calcularCreditoTotal(monto, cuotas)
  }else{
    alert("No puedes recibir esa cantidad")
  }

}

function cuantasCuotasDeseaPagar(){
  let cuotas = parseInt(prompt("¿Cuántas cuotas deseas pagar? Solo puedes optar por 3,6,9,12,24"))
  
  if(cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12 || cuotas === 24){
    return cuotas
  }else{
    cuantasCuotasDeseaPagar()
  }
}

function calcularCreditoTotal(
  monto,
  cuotas
){
  let intereses = ((monto * interesMensual)/100) * cuotas;
  console.log("que onda: ",monto,intereses)
  let total = monto + intereses;
  const infoOperacion =  {
    totalDeuda: total,
    capital: monto,
    intereses: intereses,
    cuotas: cuotas,
    valorDeCuota: total / cuotas
  }
  return infoOperacion
}

function mostrarInfoOperacion(infoOperacion){
  infoOperacion = calcularCreditoTotal()
  alert("El total de tu deuda es: $" + infoOperacion.totalDeuda)
  alert("El capital es: $" + infoOperacion.capital)
  alert("Los intereses son: $" + infoOperacion.intereses)
  alert("Las cuotas son: " + infoOperacion.cuotas)
  alert("El valor de cuota es: $" + infoOperacion.valorDeCuotas)
}





function main(){
  console.log("Se está ejecutando...")
  preguntarSiquiereUnCredito()
}



main()

