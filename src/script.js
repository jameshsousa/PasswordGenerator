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
const pass = document.getElementById("password");

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

  else if  (uppercase.checked == false && lowercase.checked == false && numbers.checked == false && symbols.checked == false ){
    strength.innerHTML = "";
  }
    
}

const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
const number = [0,1,2,3,4,5,6,7,8,9];
const symbol = ['!', '@', '#', '$', '%', '&', '§', '?'];



const u = Math.floor(Math.random() * upper.length);
const l = Math.floor(Math.random() * lower.length);
const n = Math.floor(Math.random() * number.length);
const s = Math.floor(Math.random() * symbol.length);

const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  var password = "";
  if(lowercase.checked){
    for(var i = 0; i < 15; i++){
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
    }
    pass.innerHTML = password;
  }
})












