
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');


const emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneForm = /^\d{10}$/;
const nameForm = /^[a-zA-Z\s]+$/;


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const message = messageInput.value;


  
  if (name === '') {
    alert('Por favor, ingresa tu nombre.');
    return;
  }

  if (!nameForm.test(name)) {
    alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
    return;
  }

  if (email === '') {
    alert('Por favor, ingresa tu email.');
    return;
  }

  if (!emailForm.test(email)) {
    alert('Por favor, ingresa un email válido.');
    return;}

  if (phone === '') {
    alert('Por favor, ingresa tu teléfono.');
    return;
  }

  if (!phoneForm.test(phone)) {
    alert('Por favor, ingresa un teléfono válido (10 dígitos).');
    return;
  }

  if (message === '') {
    alert('Por favor, ingresa un mensaje.');
    return;
  }

  
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('message', message);

  
  form.reset();


  alert('¡Mensaje enviado con éxito!');
});
