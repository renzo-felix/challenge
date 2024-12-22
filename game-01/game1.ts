//
// Created by renzo on 21/12/2024.
//
function busquedaDp(M: number[], N: number): number[] {
    const hash = new Set<number>();
    const respuesta: number[] = [];

    for (const num of M) {
        const encontrar = N - num;
        if (hash.has(encontrar)) {
            respuesta.push(num);
            respuesta.push(encontrar);
            return respuesta;
        }
        hash.add(num);
    }

    return respuesta; 
}


const M = [2, 5, 8, 14, 0];
const N = 10;
const result = busquedaDp(M, N);

if (result.length === 0) {
    console.log("No hay respuesta");
} else {
    console.log("Respuesta encontrada: ", result);
}
