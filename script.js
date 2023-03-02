/* Función para recibir dos horas y que devuelva el tiempo transcurrido entre ambas */

function timeElapsed ( t1, t2 ) {
    let time1 = new Date("2023-03-02 " + t1); // obtenemos los milisegundos
    let time2 = new Date("2023-03-02 " + t2);

    const hours = (time2 - time1) / 3600000; // realizamos una resta de las horas dividido entre 1 hora en milisegundos

    return hours ? `${ hours } ${ hours > 1 ? 'horas' : 'hora' }` : 'No ha pasado tiempo';
}

let response = timeElapsed("12:00 AM", '09:00 PM');
console.log("==== response ====");
console.log(response);
