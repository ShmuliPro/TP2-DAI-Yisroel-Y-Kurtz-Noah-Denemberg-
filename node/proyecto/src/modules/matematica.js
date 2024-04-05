function sumar(x, y) {
    const suma=x+y;
    return suma;
    }
    const multiplicar = (a, b) => {
    const multiplicacon=a*b;
    return multiplicacon;
    };
    const divicion = (z, v) => {
        const divicion1=z/v;
        return divicion1;
        };
        const resta = (n, k) => {
            const restar=n-k;
            return restar;
            };
            const PI = 3.14;
    // Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
    export {PI, sumar, multiplicar,divicion,resta};
    