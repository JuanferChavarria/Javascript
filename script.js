
let anio = 2023

let confirmation = confirm("Para ingresar a este sitio web, debes ser mayor de edad. ¿Deseas continuar?");


if (confirmation) {

    do {

        let edad = parseInt(prompt("Ingresa tu edad"));

        if (edad >= 18) {

            alert("Acabas de ingresar a un sitio web muy PEGRILOSO. Debes tener cuidado o te arrepentirás de por vida.")

            let eleccion1 = prompt("Ingresa el número del contenido que quieres ver: \n\n 1 Peliculas de barbies \n 2 Fotos de gatitos \n 3 Pagina sin contenido que está vacía y que no debes de ver")

            if (eleccion1 == 3) {

                let eleccion2 = prompt("Has elegido el camino correcto. Ahora elige qué quieres conocer: \n\n 1 El pasado \n 2 El presente \n 3 El futuro")

                switch (eleccion2) {

                    case "1":

                        alert("Naciste en el " + calculoNacimiento(anio,edad))
                        break;

                    case "2":

                        alert("En estos momentos tienes " + edad + " años. Soy adivino, ¿No crees?")
                        break;

                    case "3":

                        alert("Irás al Shangri-La cuando tengas 80 años, es decir, en el " + ((anio + 80) - edad));
                        break;

                }


            } else {
                alert("Lo siento. El desarrollador de esta pre-entrega estuvo muy ocupado con otras cosas y no tuvo el tiempo suficiente de poner algo aquí. Vuelve otro día y no intentes la opción 3.")
            }


        } else {
            alert("No tienes edad suficiente para ingresar al sitio web. Regresa cuando seas mayor de edad")
        }


        confirmation = confirm("¿Quieres probar de nuevo? Yo sé que no quieres explorar todas las opciones para saber sus resultados")

    } while (confirmation)

} 


function calculoNacimiento (number1,number2){
    let nacimiento;
    nacimiento = number1 - number2;
    return nacimiento
} 