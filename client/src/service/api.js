async function getAll(ip) {
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

const listar = {
  getAll,
};

export default listar;
