let funciones = require("./concesionaria");

let opcion = process.argv[2];
let primerParam = process.argv[3];
let segundoParam = process.argv[4];


switch(opcion){
    case "buscar auto":
       funciones.buscarAuto(primerParam)
        break;

    case "vender auto":
        funciones.venderAuto(primerParam)
        break;
    
    case "autos para la venta":
        funciones.autosParaLaVenta()
        break;

    case "autos nuevos":
        funciones.autosNuevos()
        break;

    case "lista de ventas":
       funciones.listaDeVentas()
        break;

    case "total de ventas":
        funciones.totalDeVentas()
        break;

    case "puede comprar":
        funciones.puedeComprar(primerParam,segundoParam)
        break;

    case "autos disponibles":
        funciones.autosQuePuedeComprar(primerParam)
        break;

}