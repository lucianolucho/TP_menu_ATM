




let listadoMenu = "Elija alguna de las siguientes opciones: \n\n";
let sigoOperando = true;
let dineroEfectivoCajero = 1000;
let saldoCuentaCliente = 5000;
let sigo;

let menuCajero = ["Consultar saldo", "Extraer dinero", "Depositar", "Salir"];

for (var i = 0; i < menuCajero.length; i++) {
    listadoMenu = listadoMenu + (i + 1) + "-" + menuCajero[i] + " \n";
}

// alert(listadoMenu);

do {
    var opcion = parseInt(prompt(listadoMenu));
    if (Number(opcion) != NaN) {

        switch (opcion) {

            case 1: //consultar saldo 
                alert("Su saldo actual es $" + saldoCuentaCliente);
                break;
            case 2: //extraer
                var extraer = true;

                do {
                    var extraccion = parseInt(prompt("Ingrese el monto deseado a retirar: "));
                    if (!isNaN(extraccion)) {

                        if (extraccion <= saldoCuentaCliente) {
                            saldoCuentaCliente = saldoCuentaCliente - extraccion;
                            alert("Retire su dinero : $ " + extraccion +
                                "\n Su saldo es: $" + saldoCuentaCliente);
                            extraer = false;
                        } else {
                            alert("No puede extrer por saldo insuficiente ")
                        }

                    } else {
                        alert("Monto a extraer mal ingresado")
                    }

                } while (extraer)

                break;
            case 3: //depositar

                var depositar = true;

                do {
                    var deposito = parseInt(prompt("Ingrese el monto deseado a depositar: "));
                    if (!isNaN(deposito)) {
                        saldoCuentaCliente = saldoCuentaCliente + deposito;
                        alert("Su deposito es: $ " + deposito +
                            "\n Su saldo es: $" + saldoCuentaCliente);
                        depositar = false;

                    } else {
                        alert("Monto a depositar mal ingresado")
                    }
                } while (depositar)
                break;
            case 4:
                sigoOperando = false;
                break;
            default:
                break;
        }

    } else {
        alert("La opción ingresada es inválida, intente nuevamente")
    }

    // sigo = prompt("Subtotal: $" + subtotal + "\n Desea seguir comprando?: si-1 , No-2");
    // if (sigo != 1) {
    //     sigoComprando = false;
    // }

} while (sigoOperando)







