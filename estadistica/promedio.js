export function promediando(list) {
  const sumaDatos = list.reduce(
    (valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento
  );
  const mediaAritmetica = (sumaDatos / list.length).toFixed(2);
  return mediaAritmetica;
};