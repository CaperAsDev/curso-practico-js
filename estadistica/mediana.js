function compareNumbers(a, b) {
  return a - b;
}

export function encontrarMediana(numeros) {
	const orderedList = numeros.sort(compareNumbers);
	let isEven;
  if (orderedList.length % 2 == 0) {
    isEven = true;

    let indexPar1 = orderedList.length / 2;
    let indexPar2 = orderedList.length / 2 - 1;

    let value = (orderedList[indexPar1] + orderedList[indexPar2]) / 2;
    return({value, orderedList, indexPar1, indexPar2});
  } else {
    isEven = false;
    orderedList.sort(compareNumbers);

    let indexImpar = Math.floor(orderedList.length / 2);

    let value = orderedList[indexImpar];
		return({value, orderedList, indexImpar});
  }
};