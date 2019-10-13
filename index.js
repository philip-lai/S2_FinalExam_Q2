const body = document.body
const r = document.getElementById('r')
const g = document.getElementById('g')
const b = document.getElementById('b')
const r_value = document.getElementById('r_value')
const g_value = document.getElementById('g_value')
const b_value = document.getElementById('b_value')
const hex_value = document.getElementById('hex')


//transfer 'r g b' value to hex and combine to final value.
//then set color
function setFinalColor() {
  let r_hex = parseInt(r.value, 10).toString(16)
  let g_hex = parseInt(g.value, 10).toString(16)
  let b_hex = parseInt(b.value, 10).toString(16)
  let hex = "#" + padCheck(r_hex) + padCheck(g_hex) + padCheck(b_hex)
  body.style.backgroundColor = hex;
  hex_value.value = hex;
  console.log(hex)
}

//check whether rgb hex-string-length value is equal to 2
function padCheck(rgbOriginValue) {
  while (rgbOriginValue.length !== 2) {
    rgbOriginValue = "0" + rgbOriginValue
  }
  return rgbOriginValue
}

//addEventListener to the r g b sliders
//and sync slider's value to the output
r.addEventListener('change', function () {
  setFinalColor();
  r_value.value = r.value;
}, false);

r.addEventListener('input', function () {
  setFinalColor();
  r_value.value = r.value;
}, false);

g.addEventListener('change', function () {
  setFinalColor();
  g_value.value = g.value;
}, false);

g.addEventListener('input', function () {
  setFinalColor();
  g_value.value = g.value;
}, false);

b.addEventListener('change', function () {
  setFinalColor();
  b_value.value = b.value;
}, false);

b.addEventListener('input', function () {
  setFinalColor();
  b_value.value = b.value;
}, false);