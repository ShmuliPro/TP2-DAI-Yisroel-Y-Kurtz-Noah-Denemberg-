const { URL } = require('url');

function parsearUrl(laURL) {

    const urlObj = new URL(laURL);


    const host = urlObj.origin;
    const pathname = urlObj.pathname;


    const parametros = {};
    for (const [clave, valor] of urlObj.searchParams) {
        parametros[clave] = valor;
    }


    return {
        host: host,
        pathname: pathname,
        parametros: parametros
    };
}


let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
