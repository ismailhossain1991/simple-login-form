const sign_up_form = document.getElementById('sign_up_form');
const msg = document.querySelector('.msg');

const button = document.querySelector('#test') ;

button.onclick = () =>{

   setInterval(function(){

      msg.innerHTML = `<p class="alert alert-info">Apple Orange <button class="close" data-dismiss="alert">&times;</button></p>`;
   }, 4000);

   
}


sign_up_form.addEventListener('submit', function(e) {
e.preventDefault();

let name = sign_up_form.querySelector('input[placeholder="Name"]');
let email = sign_up_form.querySelector('input[placeholder="Email"]');
let location = sign_up_form.querySelector('select');
let gender = sign_up_form.querySelector('input[type="radio"]:checked');
let skill = sign_up_form.querySelectorAll('input[type="checkbox"]:checked');

for (let i = 0; i < skill.length; i++) {
   
   console.log(skill[i].value);
   
}

if(name.value == '' || email.value == '' || location == ''){

msg.innerHTML = validate ('All fields are required');
}else{

   msg.innerHTML = validate('Data Stable', 'success');
}

setTimeout(function(){
   msg.innerHTML = '';
}, 3000);

}); 