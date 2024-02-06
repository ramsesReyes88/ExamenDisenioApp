const axios = require('axios'); 

const url = 'https://jsonplaceholder.typicode.com/todos'; 

function mostrarLista(opcion) {
    axios.get(url).then(({data}) => {
        switch (opcion) {
            case 1:
                for(const key in data){
                    console.log("ID: " + data[key].id);
                }
                break;
            case 2:
                for(const key in data){
                    console.log("ID: " + data[key].id + " Title: " + data[key].title);
                }
                break;
            case 3:
                for(const key in data){
                    if(data[key].completed === false)
                        console.log("ID: " + data[key].id + " Title: " + data[key].title);
                }
                break;
            case 4:
                for(const key in data){
                    if(data[key].completed === true)
                        console.log("ID: " + data[key].id + " Title: " + data[key].title);
                }
                break;
            case 5:
                for(const key in data){
                    console.log("ID: " + data[key].id + " UserID: " + data[key].userId);
                }
                break;
            case 6:
                for(const key in data){
                    if(data[key].completed === true)
                        console.log("ID: " + data[key].id + " UserID: " + data[key].userId);
                }
                break;
            case 7:
                for(const key in data){
                    if(data[key].completed === false)
                        console.log("ID: " + data[key].id + " UserID: " + data[key].userId);
                }
                break;
            default:
                console.log("Opción inválida");
        }
        process.exit();
    }).catch(error => {
        console.log("Error al obtener los datos:", error);
    });
}

function mostrarMenu() {
    console.log("Menú:");
    console.log("1- Lista de pendientes (Solo ID)");
    console.log("2- Lista de pendientes (Solo ID y títulos)");
    console.log("3- Lista de pendientes sin resolver (ID y títulos)");
    console.log("4- Lista de pendientes resueltos (ID y títulos)");
    console.log("5- Lista de pendientes (ID y userID)");
    console.log("6- Lista de pendientes resueltos (ID y userID)");
    console.log("7- Lista de pendientes sin resolver (ID y userID)");
    console.log("0- Salir");
}

function iniciar() {
    mostrarMenu();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Por favor, seleccione una opción: ", opcion => {
        if (opcion >= 1 && opcion <= 7) {
            mostrarLista(parseInt(opcion));
        } else if (opcion === '0') {
            console.log("Saliendo...");
            process.exit();
        } else {
            console.log("Opción inválida, por favor seleccione un número del 1 al 7.");
        }
    });
}

iniciar();







