// izdvojio sam ove dve funkcije u klasu jer su zajednicke 
// za oba pejdza (EditCarPage i AddCarPage).

class FormFunction {
  generateSelectBox() {
    let years = [];
    for (let i = 2022; i >= 1990; i--) {
      years.push(i);
    }
    return years;
  }
  previewForm(car) {
    let message;
    for (const key in car) {
      let item = key + ": " + car[key] + "\n";
      message += item;
    }
    alert(message);
  }
}

export const formFunction = new FormFunction();
