async function getModulo(ip) {
  try {
    const api = "http://" + ip + ":3000/modulo";
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Modulo"];
  } catch (error) {
    alert("Erro na requisição");
    return "Error";
  }
}

async function getCidade(ip) {
  try {
    const api = "http://" + ip + ":3000/cidade";
    console.log(api)
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson["Cidades"];
  } catch (error) {
    alert("Erro na requisição");
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
    alert("Erro na requisição");
    return "Error";
  }
}


const listar = {
  getModulo,
  getCidade,
  getMedia
};

export default listar;
