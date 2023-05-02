var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strength = document.getElementById("strength");

var checkbox = document.querySelector("input[name=checkbox]");

function myFunction() {
  if (uppercase.checked == true && lowercase.checked == true && numbers.checked == true && symbols.checked == true ){
    strength.innerHTML = "strong";
  }
  else if   (uppercase.checked == true && lowercase.checked == true && numbers.checked == true || uppercase.checked == true && lowercase.checked == true && symbols.checked == true ){
    strength.innerHTML = "medium"; 
  }

  else if(uppercase.checked == true && lowercase.checked == true){
    strength.innerHTML = "weak";
  }

  else if  (uppercase.checked == true){
    strength.innerHTML = "too weak!";
  }
  
  else if  (lowercase.checked == true){
    strength.innerHTML = "too weak!";
  } 
    
}

const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
const number = [0,1,2,3,4,5,6,7,8,9];
const symbol = ['!', '@', '#', '$', '%', '&', '§', '?'];



const u = Math.ceil(Math.random() * upper.length);
const l = Math.ceil(Math.random() * lower.length);
const n = Math.ceil(Math.random() * number.length);
const s = Math.ceil(Math.random() * symbol.length);

const btn = document.getElementById("btn");

var lista = [];
btn.addEventListener("click", () => {
  if(lowercase.checked){
    for(var i = 0; i < 10; i++){
      lista.pop()
    }

  }
})












