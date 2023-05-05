
const myRange = document.getElementById("range");
var length = 12;

document.getElementById("myRange").addEventListener('input', () => {
  var x = document.getElementById("myRange").value;  
  myRange.innerHTML = x; 
  length = x; 
})


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
    strength.style.color= "#A4FFAF";
  }

  else if   (uppercase.checked == true && lowercase.checked == true && numbers.checked == true || uppercase.checked == true && lowercase.checked == true && symbols.checked == true || numbers.checked == true && symbols.checked == true && lowercase.checked == true || numbers.checked == true && symbols.checked == true && uppercase.checked == true ){
    strength.innerHTML = "medium"; 
    strength.style.color= "#F8CD65";
  }

  else if(uppercase.checked == true && lowercase.checked == true || symbols.checked == true && numbers.checked == true || lowercase.checked == true && numbers.checked == true || uppercase.checked == true && numbers.checked == true || lowercase.checked == true && numbers.checked == true || uppercase.checked == true && symbols.checked == true || lowercase.checked == true && symbols.checked == true ){
    strength.innerHTML = "weak";
    strength.style.color= "#FB7C58";
  }

  else if  (uppercase.checked == true){
    strength.innerHTML = "too weak!";
    strength.style.color="#F64A4A";
  }
  
  else if  (lowercase.checked == true){
    strength.innerHTML = "too weak!";
    strength.style.color="#F64A4A";
  } 

  else if  (numbers.checked == true){
    strength.innerHTML = "too weak!";
    strength.style.color="#F64A4A";
  } 
  else if  (symbols.checked == true){
    strength.innerHTML = "too weak!";
    strength.style.color="#F64A4A";
  } 

  else if  (uppercase.checked == false && lowercase.checked == false && numbers.checked == false && symbols.checked == false ){
    strength.innerHTML = "";
  }
    
}




const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
const number = [0,1,2,3,4,5,6,7,8,9];
const symbol = ['!', '@', '#', '$', '%', '&', '§', '?'];

const list = [lower, upper, number, symbol];


const u = Math.floor(Math.random() * upper.length);
const l = Math.floor(Math.random() * lower.length);
const n = Math.floor(Math.random() * number.length);
const s = Math.floor(Math.random() * symbol.length);
const k = Math.floor(Math.random() * list.length);

const btn = document.getElementById("btn");
var copy;


btn.addEventListener("click", () => {
  var password = "";
  if(lowercase.checked == true && uppercase.checked == false && symbols.checked == false && numbers.checked == false ){
    for(var i = 0; i < parseInt(length); i++){
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
    }
    pass.innerHTML = password;
    copy = password;
  }
  else if(uppercase.checked == true && lowercase.checked == false && symbols.checked == false && numbers.checked == false ){
    for(var i = 0; i < parseInt(length); i++){
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(symbols.checked == true && uppercase.checked == false && lowercase.checked == false && numbers.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == false && uppercase.checked == false && lowercase.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == true && uppercase.checked == false && lowercase.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else {
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == false && symbols.checked == false && uppercase.checked == true && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == false && symbols.checked == true && uppercase.checked == true && lowercase.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
      else {
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == false && uppercase.checked == false && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == false && uppercase.checked == true && lowercase.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else {
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }


  else if(numbers.checked == false && symbols.checked == true && uppercase.checked == false && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }


  else if(numbers.checked == true && symbols.checked == true && uppercase.checked == true && lowercase.checked == false){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else if (i % 3 == 0) {
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
      else {
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == true && uppercase.checked == false && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else if (i % 3 == 0) {
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == true && symbols.checked == false && uppercase.checked == true && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];
      }
      else if (i % 3 == 0) {
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }

  else if(numbers.checked == false && symbols.checked == true && uppercase.checked == true && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if(i % 2 == 0){
      const s = Math.floor(Math.random() * symbol.length);
      password += symbol[s];
      }
      else if (i % 3 == 0) {
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];
      }
      else {
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];
      }
    }
    pass.innerHTML = password;
    copy = password;
  }




  else if(numbers.checked == true && symbols.checked == true && uppercase.checked == true && lowercase.checked == true){
    for(var i = 0; i < parseInt(length); i++){
      if (i == 0){
      const n = Math.floor(Math.random() * number.length);
      password += number[n];      
      }
      else if(i == 1){
        const s = Math.floor(Math.random() * symbol.length);
        password += symbol[s];        
      }
      else if(i == 2){      
      const u = Math.floor(Math.random() * upper.length);
      password += upper[u];      
      }
      else if(i == 3){
      const l = Math.floor(Math.random() * lower.length);
      password += lower[l];     
      }

      else if (i >= 4){
        const k = Math.floor(Math.random() * list.length);
        const w = list[k];
        if(w == upper){
          const u = Math.floor(Math.random() * upper.length);
          password += upper[u];
        }
        else if(w == lower){
          const l = Math.floor(Math.random() * lower.length);
          password += lower[l];
        }
        else if(w == symbol){
          const s = Math.floor(Math.random() * symbol.length);
          password += symbol[s];
        }
        else if(w === number){
          const n = Math.floor(Math.random() * number.length);
          password += number[n];
        }
      }  
    }
    pass.innerHTML = password;
    copy = password;
  }
})



function copyText() {
  
  navigator.clipboard.writeText(copy);

};












