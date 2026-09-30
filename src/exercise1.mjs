export function validateArrayElements(arr, elementValidator) {
  return arr.map(element => ({
    value: element,
    isValid: elementValidator(element)
  }));
}