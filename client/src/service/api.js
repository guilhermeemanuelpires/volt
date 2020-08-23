async function getModulo(ip) {
  try {
    const api = "http://" + ip + ":3000/modulo";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Modulo"];
  } catch (error) {
    return "Error";
  }
}

async function getCidade(ip) {
  try {
    const api = "http://" + ip + ":3000/cidade";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Cidades"];
  } catch (error) {
    return "Error";
  }
}

async function getMedia(ip) {
  try {
    const api = "http://" + ip + ":3000/media";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Media"];
  } catch (error) {
    return "Error";
  }
}

async function getTarifa(ip) {
  try {
    const api = "http://" + ip + ":3000/tarifas";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Tarifa"];
  } catch (error) {
    return "Error";
  }
}

async function getTipoRede(ip) {
  try {
    const api = "http://" + ip + ":3000/padroes";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Padroes"];
  } catch (error) {
    return "Error";
  }
}

async function getDisjuntor(ip) {
  try {
    const api = "http://" + ip + ":3000/disjuntor";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Disjutores"];
  } catch (error) {
    return "Error";
  }
}

async function getTipoInstall(ip) {
  try {
    const api = "http://" + ip + ":3000/tipo";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Tipos"];
  } catch (error) {
    return "Error";
  }
}

async function getCalculoKWP(ip) {
  try {
    const api = "http://" + ip + ":3000/calculoKWP";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["CalculoKWP"];
  } catch (error) {
    return "Error";
  }
}

const listar = {
  getModulo,
  getCidade,
  getMedia,
  getTarifa,
  getTipoRede,
  getDisjuntor,
  getTipoInstall,
  getCalculoKWP,
};

export default listar;
