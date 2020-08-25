function potencia_sistema(consumo, mediaCidade, taxaperda) {
  var resultado = consumo / 30 / mediaCidade / taxaperda;
  if (resultado < 2.64) {
    resultado = 2.64;
  }
  return resultado;
}

function num_modulos(potenciaSistema, potencia) {
  var resultado = potenciaSistema / potencia;
  resultado = Math.ceil(Number(resultado));
  resultado = resultado * 1.05;
  if (resultado % 2 == 0) {
    resultado = resultado;
  } else {
    resultado = Math.ceil(Number(resultado));
    if (resultado % 2 == 0) {
      resultado = resultado;
    } else {
      resultado = resultado + 1;
    }
  }
  return resultado;
}

function potencia_instalada(numeroModulo, tarifa) {
  var resultado = numeroModulo * tarifa;
  return resultado;
}

function geracao_estimada(potenciaInstalada, mediaCidade) {
  var resultado = (potenciaInstalada * 30 * mediaCidade * 0.8)

  return resultado;
}

function luz_sem_volt(baseConsumo, tarifa) {
  var resultado = (baseConsumo * tarifa * 12)
  return resultado;
}

function luz_com_volt(geracaoEstimada, baseConsumo, coluna1, tarifa) {
  var resultado = 0
  if(geracaoEstimada > baseConsumo){
    resultado = (tarifa * coluna1 * 12)
  }else{
    resultado = ((baseConsumo - geracaoEstimada) * tarifa * 12)
  }
  return resultado
}

function economia(luzSemVolt, luzComVolt) {
  var resultado = (luzSemVolt - luzComVolt);
  return resultado;
}

function investimento(numeroModulo, valorKWP) {

  var resultado = (numeroModulo * valorKWP);
  return resultado;
}

const Calculos = {
  potencia_sistema,
  num_modulos,
  potencia_instalada,
  geracao_estimada,
  luz_sem_volt, 
  luz_com_volt,
  economia,
  investimento
};

export default Calculos;
