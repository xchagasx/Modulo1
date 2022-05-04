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
  const btnSend = document.querySelector('#send');
  const boxConc2 = document.querySelector("#conc2");
  function enable() {
    if (boxConc2.checked) {
      btnSend.disabled = false;
    } else {
      btnSend.disabled = true;
    }
  }
  boxConc2.addEventListener('change', enable);
}

function cValid(){
  const name = document.getElementById('name');
  const email = document.getElementById('e-mail');
  //name = input.length.value;
  alert(name);
  console.log('l');
}

window.onload = function() {
//prevente();
habilit();
cValid();
};
