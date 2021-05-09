function validartodocontacto() {
    var nombre = document.getElementById('txtnombre').value;
    var correo = document.getElementById('txtcorreo').value;
    var telefono = document.getElementById('txttelefono').value;
    var mensaje = document.getElementById('txtmensaje').value;
    alert('Se ha recuperado los siguientes datos: \n Nombre: '+nombre+'\n Correo: '+correo+'\n Telefono: '+telefono+'\n Mensaje: '+mensaje);

}

function validarNombre() {
    var nombre = document.getElementById('txtnombre').value;
    alert(nombre);
}

function validarbuscar() {
    var buscar = document.getElementById('txtbuscar').value;
    alert('Se quiere buscar lo siguiente: '+buscar);
}

function validarlogin() {
    var correo = document.getElementById('txtcorreo').value;
    var contrasena = document.getElementById('txtcontrasena').value;
    var sihaypass = "No hay texto aquí"
    if (correo=='' || contrasena==''){
        alert("Está todo mal");
        return;
    } else {
        var sihaypass = "Si hay texto! Muy bien";
    }
    alert('Correo: '+correo + '\nContrasena: '+sihaypass);
}

function validarregistro() {
    var nombre = document.getElementById('txtnombre').value;
    var correo = document.getElementById('txtcorreo').value;
    var contrasena = document.getElementById('txtcontrasena').value;
    var sihaypass = "No hay texto aquí"
    if (nombre=='' || correo=='' || contrasena==''){
        alert("Está todo mal");
        return;
    } else {
        var sihaypass = "Si hay texto! Muy bien";
    }
    alert('Nombre: '+nombre+'\nCorreo: '+correo + '\nContrasena: '+sihaypass);
}

function recuperar_ip() {
    fetch("https://api.ipify.org?format=json")
    .then(function(response) {
        //status 200 ok, si falla
        if (response.status!=200) {
            alert ("está malo el server de ip :(");
            return;
        }
        response.json().then(function(data) {
            console.log(data);
            var ip= data.ip;
            alert("IP publica de tu dispositivo:" +ip)

        })
    })
}
