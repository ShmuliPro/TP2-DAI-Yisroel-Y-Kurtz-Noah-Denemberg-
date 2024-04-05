import fs from 'fs';

function copiar(origen, destino) {
fs.readFile(origen, 'utf8', (err, data) => {
if (err) {
console.error('Error al leer el archivo de origen:', err);

return;
}

fs.writeFile(destino, data, 'utf8', err => {
if (err) {
console.error('Error al escribir en el archivo de destino:', err);
return;
}
console.clear();
console.log(`El archivo se copió correctamente de ${origen} a ${destino}`);
});
});
}

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";


copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);