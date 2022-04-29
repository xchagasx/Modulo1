function prevente() {

  const btn = document.querySelector('#send');
  const form = document.querySelector('#form');
  const write = document.querySelector('#write');
  
  function pValue(event){
    event.preventDefault();
    console.log(write.value);
  }
  btn.addEventListener('click', pValue);
}

function habilit() {
  const btn = document.querySelector('#send');
  const boxConc2 = document.querySelector("#conc2");
  function enable() {
    if (boxConc2.checked) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }
  boxConc2.addEventListener('change', enable);
}

function cValid(){
  const name = document.querySelector('#name');
  const email = document.querySelector('#e-mail');
  name = input.length.value;
  alert(name);
}

//window.onload = function() {
//prevente();
//habilit();
//cValid();
//};
