var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});

const uppercase = document.getElementById("uppercase").checked;
const lowercase = document.getElementById("lowercase").checked;
const number = document.getElementById("number").checked;
const symbols = document.getElementById("symbols").checked;

var checkbox = document.querySelector("input[name=checkbox]");

function myFunction() {
  if (uppercase == true && lowercase == true && number == true && symbols == true){
    alert("Stronger");
  }
}


