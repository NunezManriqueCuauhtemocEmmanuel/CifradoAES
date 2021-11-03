$(function(){
    $("#Cripto").on("click", function(){
        var texto = $("#texto").val();
        var pass = $("#clave").val();

        var encriptar = CryptoJS.AES.encrypt(texto, pass).toString();

        $("#encriptado").val(encriptar);

        console.log(encriptar,pass)
    });
    $("#Decrip").on("click", function(){
        var texto = $("#encriptado").val();
        var pass = $("#clave").val();

        var descifrado = CryptoJS.AES.decrypt(texto, pass).toString();

        $("#descifrado").val(descifrado);
    });

    $("#DecripUTF").on("click", function(){
        var texto = $("#encriptado").val();
        var pass = $("#clave").val();

        var descifrado = CryptoJS.AES.decrypt(texto, pass);

        var desencriptado = descifrado.toString(CryptoJS.enc.Utf8);

        $("#descifradoUTF").val(desencriptado);
    });
});
