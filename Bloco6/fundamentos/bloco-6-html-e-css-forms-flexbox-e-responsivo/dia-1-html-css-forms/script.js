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
function dateValid() {
var field = document.getElementById('datepicker');
var picker = new Pikaday({
    onSelect: function() {
        field.value = picker.toString();
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);
}

window.onload = function() {
prevente();
habilit();
dateValid();
};
