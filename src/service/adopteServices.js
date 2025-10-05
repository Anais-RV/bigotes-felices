export function submitAdoption(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('OK') : reject('KO');
    }, 1000);
  });
}