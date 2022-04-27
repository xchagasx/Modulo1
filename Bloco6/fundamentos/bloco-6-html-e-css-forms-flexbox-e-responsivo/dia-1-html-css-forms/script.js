const btn = document.querySelector('#send');
const form = document.querySelector('#form');
const write = document.querySelector('#write');

function pValue(event){
    event.preventDefault();
    console.log(write.value);
}
btn.addEventListener('click', pValue);

const boxConc2 = document.querySelector("#conc2");
function enable() {
  if (boxConc2.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
boxConc2.addEventListener('change', enable);

window.onload = function() {
enable();
pValue();
};