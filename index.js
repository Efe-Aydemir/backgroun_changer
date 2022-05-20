const color_code = document.querySelector('#color_hex_code')
const color_chang_btn = document.querySelector('#random_button')


function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }


color_chang_btn.addEventListener('click', () => {
    let randn1 = Math.floor(Math.random() * 256);
let randn2 = Math.floor(Math.random() * 256);
let randn3 = Math.floor(Math.random() * 256);


    document.body.style.backgroundColor = `rgb(${randn1}, ${randn2}, ${randn3})`
    color_code.innerHTML = rgbToHex(randn1, randn2, randn3)
})