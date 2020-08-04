const api = 'http://192.168.0.236:3000/modulo';

async function getAll() {
  try {
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