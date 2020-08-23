//CPF e CNPJ
function cpfMask(value) {
    const calc = value;

    if (calc.length <= 15) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2');
    } else {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1/$2')
            .replace(/(\d{4})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
}

//TELEFONE
const foneMask = value => {

    const calc = value;
    if (calc.length <= 14) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2');
    }

}

//CEP
const cepMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
}

//Moeda BR
function moedaMask(value) {
    return Number(value).toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// Substituir virgula por ponto
function notVirgula(value) {
    return value.replace(/,/g, '.');
}

const Mask = {
    cpfMask,
    moedaMask,
    notVirgula,
    foneMask,
    cepMask
}

export default Mask;