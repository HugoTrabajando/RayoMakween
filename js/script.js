function validartodocontacto() {
    var nombre = document.getElementById('txtnombre').value;
    var correo = document.getElementById('txtcorreo').value;
    var telefono = document.getElementById('txttelefono').value;
    var mensaje = document.getElementById('txtmensaje').value;
    alert('Se ha recuperado el nombre: ' + nombre);
    alert('Se ha recuperado el correo: ' + correo);
    alert('Se ha recuperado el telefono: ' + telefono);
    alert('Se ha recuperado el mensaje: ' + mensaje);
}

function validarNombre() {
    var nombre = document.getElementById('txtnombre').value;
    alert(nombre);
}

function validarbuscar() {
    var buscar = document.getElementById('txtbuscar').value;
    alert('Se quiere buscar lo siguiente: '+buscar);
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
