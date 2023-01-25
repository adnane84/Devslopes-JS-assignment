export function minBy(array, cb) {
  if (array.length === 0) return undefined;
  let minElement = array[0].age;
  let minValue = cb(array[0]);
  for (let i = 1; i < array.length; i++) {
      let currentValue = cb(array[i]);
      if (currentValue < minValue) {
          minElement = array[i];
          minValue = currentValue;
      }
  }
  return minElement;

}

export function maxBy(array, cb) {
  if (array.length === 0) return undefined;
  let maxElement = array[0].age;
    let maxValue = cb(array[0]);
    for (let i = 1; i < array.length; i++) {
        let currentValue = cb(array[i]);
        if (currentValue > maxValue) {
            maxElement = array[i];
            maxValue = currentValue;
        }
    }
    return maxElement;
}
