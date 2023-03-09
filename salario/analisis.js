import { encontrarMediana } from "../estadistica/mediana.js";
import { encontrarModa } from "../estadistica/moda.js";
import { promediando } from "../estadistica/promedio.js";

function encontrarPersona(nombre) {
  return salarios.find((persona) => persona.name == nombre);
}
function extraerSalarios(nombre) {
  const arrSalarios = encontrarPersona(nombre).trabajos.map(
    (trabajos) => trabajos.salario
  );
  return arrSalarios;
}
function calcularMediana(nombre) {
  const arrSalarios = extraerSalarios(nombre);
  return encontrarMediana(arrSalarios).value;
}
function proyeccionSalarial(nombre) {
  const arrSalarios = extraerSalarios(nombre);

  const porcentajesCrecimiento = arrSalarios.reduce(
    (acomulado, dato, index) => {
      if (arrSalarios[index + 1] !== undefined) {
        const diferencia = arrSalarios[index + 1] - dato;
        const crecimiento = diferencia / dato;

        acomulado.push({ salario: arrSalarios[index + 1], crecimiento });
      }
      return acomulado;
    },
    []
  );

  const medianaCrecimiento = encontrarMediana(
    porcentajesCrecimiento.map((dato) => dato.crecimiento)
  );

  const proyeccion =
    arrSalarios[arrSalarios.length - 1] +
    arrSalarios[arrSalarios.length - 1] * medianaCrecimiento.value;

  return proyeccion;
}
//! Conversion de estructura de la informacion
function datosEmpresa() {
  const nuevosDatos = salarios.reduce((acc, trabajador) => {
    let nombreEmpleado = trabajador.name;
    for (const valor of trabajador.trabajos) {
      let salario = valor.salario;
      let periodo = valor.year;
      let empresa = valor.empresa;

      !acc[empresa]
        ? (acc[empresa] = {
            [periodo]: [{ nombre: nombreEmpleado, salario: salario }],
          })
        : !acc[empresa][periodo]
        ? (acc[empresa][periodo] = [
            { nombre: nombreEmpleado, salario: salario },
          ])
        : acc[empresa][periodo].push({
            nombre: nombreEmpleado,
            salario: salario,
          });
    }
    return acc;
  }, {});
  return nuevosDatos;
}
const baseDatos2 = datosEmpresa();
console.log(baseDatos2);

/* const empresas = {
  mokepon: {
    2018: [
      { nombre: "juanita", salaraio: 1250 },
      { nombre: "Solan", salario: 2500 },
    ],
    2019: [{ nombre: "Juan", salario: 2000 }],
  },
}; */

function calcularMedianaEmpresa(nombre, año) {
  if (!baseDatos2[nombre] || !baseDatos2[nombre][año]) {
    return console.warn("No hay registros de esa empresa o ese año");
  }

  let salarios = baseDatos2[nombre][año].map((data) => data.salario);
  let medianaSalarios = encontrarMediana(salarios).value;

  return medianaSalarios;
}

/* console.log(calcularMedianaEmpresa("Freelance", 2023));*/
function proyeccionEmpresa(nombre) {
  let objEmpresa = baseDatos2[nombre];
  let arrayMedianas = [];
  for (const key in objEmpresa) {
    arrayMedianas.push(calcularMedianaEmpresa(nombre, key));
  }

  const porcentajesCrecimiento = arrayMedianas.reduce(
    (acomulado, dato, index) => {
      if (arrayMedianas[index + 1] !== undefined) {
        const diferencia = arrayMedianas[index + 1] - dato;
        const crecimiento = diferencia / dato;

        acomulado.push(crecimiento);
      }
      return acomulado;
    },
    []
  );

  const medianaCrecimiento = encontrarMediana(porcentajesCrecimiento);

  const proyeccion =
    arrayMedianas[arrayMedianas.length - 1] +
    arrayMedianas[arrayMedianas.length - 1] * medianaCrecimiento.value;

  return proyeccion;
};

/* console.log(proyeccionEmpresa("Freelance")); */
