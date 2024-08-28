
function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}


function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


function executarAcao() {
    let texto = document.getElementById("inputText").value.trim();
    let acao = document.getElementById("actionSelect").value;
    let resultado;

    
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Por favor, insira apenas letras minúsculas, sem acentos ou caracteres especiais.");
        return;
    }

    if (acao === "criptografar") {
        resultado = criptografar(texto);
    } else {
        resultado = descriptografar(texto);
    }

    document.getElementById("outputText").value = resultado;
}


function copiarTexto() {
    let textoResultado = document.getElementById("outputText");

    textoResultado.select();
    textoResultado.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    alert("Texto copiado para a área de transferência!");
}
