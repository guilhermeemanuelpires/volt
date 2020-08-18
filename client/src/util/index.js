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

const Calculos = {
  potencia_sistema,
  num_modulos,
  potencia_instalada,
};

export default Calculos;
