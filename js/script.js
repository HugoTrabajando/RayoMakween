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

function recuperar_ip() {
    fetch("https://www.geoplugin.net/json.gp")
    .then(function(response) {
        //status 200 ok, si falla
        if (response.status!=200) {
            alert ("está malo el server de ip :(");
            return;
        }
        response.json().then(function(data) {
            console.log(data);
            var ip= data.geoplugin_request;
            alert("ip:" +ip)

        })
    })
}
