document.addEventListener('DOMContentLoaded', function () {
    var documentoInput = document.getElementById('documento');
    var tipoDocumentoSelect = document.getElementById('tipo-documento');
    var cepInput = document.getElementById('cep');
    var celularInput = document.getElementById('celular');

    tipoDocumentoSelect.addEventListener('change', function () {
        aplicarMascaraDocumento(documentoInput, this.value);
    });

    documentoInput.addEventListener('input', function () {
        aplicarMascaraDocumento(this, tipoDocumentoSelect.value);
    });

    cepInput.addEventListener('input', function () {
        this.value = aplicarMascaraCEP(this.value);
    });

    celularInput.addEventListener('input', function () {
        this.value = aplicarMascaraCelular(this.value);
    });
});

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
//https://www.regular-expressions.info/
function aplicarMascaraRG(input) {
    input.value = input.value.replace(/\D/g, '').replace(/^(\d{2})(\d{3})(\d{3})(\d{1}).*/, '$1.$2.$3-$4');
}

function aplicarMascaraCEP(value) {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3}).*/, '$1-$2');
}

function aplicarMascaraCelular(value) {
    return value.replace(/\D/g, '').replace(/^(\d{2})(\d{4,5})(\d{4}).*/, '($1) $2-$3');
}

function aplicarMascaraDocumento(input, tipoDocumento) {
    if (tipoDocumento === 'cpf') {
        input.value = aplicarMascaraCPF(input.value);
    } else if (tipoDocumento === 'rg') {
        aplicarMascaraRG(input);
    }
}

function aplicarMascaraCPF(value) {
    return value.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
}