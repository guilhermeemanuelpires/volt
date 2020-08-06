async function getAll(ip) {
  try {
    const api = 'http://'+ip+':3000/modulo';
    console.log(api)
    const response = await fetch(api);
    const responseJson = await response.json();
    return responseJson['Modulo'];
  } catch (error) {
    console.error(error);
  }
}

const listar = {
  getAll,
};

export default listar;