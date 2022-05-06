
const boton = document.getElementById("btn");
const faceta1 = document.getElementById("faceta1");
const faceta2 = document.getElementById("faceta2");

const btnConversor = document.getElementById("btnConversor");
const inputReceptor = document.getElementById("NumArabico");
const devolucion = document.getElementById("LetRomana");

// devolucion.textContent = "FER";

boton.addEventListener("click", () => {
    faceta1.classList.remove("cara1");
    faceta1.classList.add("d-none");
    faceta2.classList.remove("d-none");
    faceta2.classList.add("cara1");
})

function convertToRoman(num) {
    const numerosRomanos = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]
    if(num >= 4000){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Solo puedes traducir números menores a 3.999'
          })
          return "";  
    }
    if(num === 0){
      return "";
    }
    for(let i = 0; i < numerosRomanos.length; i++){
      if(num >= numerosRomanos[i][0]){
        return numerosRomanos[i][1] + convertToRoman(num - numerosRomanos[i][0]);
      }
    }
  }

btnConversor.addEventListener("click", () => {
    // console.log(inputReceptor.value);
    let numeroParaConvertir = inputReceptor.value;
    devolucion.textContent = convertToRoman(numeroParaConvertir);

})

