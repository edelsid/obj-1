export let prop;

export default function orderAlgorithm(obj, sortingOrder) {
  const sorted = [];
  const remained = [];
  for (prop in obj) {
    if (sortingOrder.includes(prop)) {
      sorted.push({ key: prop, value: obj[prop] });
    } else {
      remained.push(prop);
    }
  }
  remained.sort();
  remained.forEach((el) => sorted.push({ key: el, value: obj[el] }));
  return sorted;
}
