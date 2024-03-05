
function encriptar() {

    var texto = document.getElementById("areaEncriptar").value;
    if (/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(texto)) {
        document.getElementById("mensajeAlerta").style.display = "block";
        return;
    } else{

    var txtEncriptado = texto.replace(/e/igm, "enter");
    txtEncriptado = txtEncriptado.replace(/o/igm, "ober");
    txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
    txtEncriptado = txtEncriptado.replace(/a/igm, "al");
    txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

    document.getElementById("areaDesencriptar").value = txtEncriptado;
    document.getElementById("areaEncriptar").value = "";

    document.getElementById("btnDesencriptar").disabled = false;
    document.getElementById("btnCopiar").disabled = false;
    document.getElementById("mensajeAlerta").style.display = "none";

    }
}


function desencriptar() {
    var texto = document.getElementById("areaEncriptar").value;
    if (/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(texto)) {
        document.getElementById("mensajeAlerta").style.display = "block";
        return;
    } else{

    var txtDesencriptado = texto.replace(/enter/igm, "e");
    txtDesencriptado = txtDesencriptado.replace(/ober/igm, "o");
    txtDesencriptado = txtDesencriptado.replace(/imes/igm, "i");
    txtDesencriptado = txtDesencriptado.replace(/al/igm, "a");
    txtDesencriptado = txtDesencriptado.replace(/ufat/igm, "u");

    document.getElementById("areaDesencriptar").value = txtDesencriptado;
    document.getElementById("areaEncriptar").value = "";
    document.getElementById("mensajeAlerta").style.display = "none";

    }
}
    function copiar() {
        let textoDesencriptado = document.querySelector("#areaDesencriptar").value;
        navigator.clipboard.writeText(textoDesencriptado)
       .then(() => {
        alert("Texto copiado exitosamente")
           });
           document.getElementById("areaDesencriptar").value = "";

    }
    



