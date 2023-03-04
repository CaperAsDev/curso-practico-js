class DatoNuevo {
  constructor(datos, veces) {
    this.dato = datos;
    this.veces = veces;
  }
}

export function encontrarModa(listaDatosModa) {
	
  const conteoDatos = listaDatosModa.reduce((acc, data)=> {
    const dataExist = acc.some((objeto) => {
      return objeto.dato === data;
    });
    let indexDato = 0;
		console.log("dataExist: "+ dataExist);
    if (dataExist) {
      indexDato = acc.findIndex((element) => element.dato == data);
      acc[indexDato].veces++;
    } else {
      acc.unshift(new DatoNuevo(data, 1));
    }
		return acc;
  },[]);

  const orderedlist = conteoDatos.sort((a, b) => {
    return a.veces - b.veces;
  });
	const lastModa = orderedlist[orderedlist.length - 1];

  return {orderedlist, lastModa};
};