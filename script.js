
function encriptar() {

    var texto = document.getElementById("areaEncriptar").value;
    if (/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(texto)) {
        alert("Los mensajes no pueden tener simbolos y/o mayusculas")
        return;
    }

    var txtEncriptado = texto.replace(/e/igm, "enter");
    txtEncriptado = txtEncriptado.replace(/o/igm, "ober");
    txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
    txtEncriptado = txtEncriptado.replace(/a/igm, "al");
    txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

    document.getElementById("areaDesencriptar").value = txtEncriptado;
    document.getElementById("areaEncriptar").value = "";

    document.getElementById("btnEncriptar").disabled = true;    
    document.getElementById("btnDesencriptar").disabled = false;

}


function desencriptar() {
    var texto = document.getElementById("areaEncriptar").value;
    if (/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(texto)) {
        alert("Los mensajes no pueden tener simbolos y/o mayusculas")
        return;
    }

    var txtDesencriptado = texto.replace(/enter/igm, "e");
    txtDesencriptado = txtDesencriptado.replace(/ober/igm, "o");
    txtDesencriptado = txtDesencriptado.replace(/imes/igm, "i");
    txtDesencriptado = txtDesencriptado.replace(/al/igm, "a");
    txtDesencriptado = txtDesencriptado.replace(/ufat/igm, "u");

    document.getElementById("areaDesencriptar").value = txtDesencriptado;
    document.getElementById("areaEncriptar").value = "";

    document.getElementById("btnEncriptar").disabled = false;
    document.getElementById("btnDesencriptar").disabled = true;
}

    function copiar() {
        let textoDesencriptado = document.querySelector("#areaDesencriptar").value;
        navigator.clipboard.writeText(textoDesencriptado)
       .then(() => {
        alert("Texto copiado exitosamente")
           });
           document.getElementById("areaDesencriptar").value = "";

    }
    
    


