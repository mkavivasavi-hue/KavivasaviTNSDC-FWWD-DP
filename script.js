// Simple form validation and feedback

const form = document.getElementById('contactForm');

const sendBtn = document.getElementById('sendBtn');

const status = document.getElementById('status');

function isEmailLike(email){

  return /\S+@\S+\.\S+/.test(email);

}

function showStatus(msg, ok=true){

  status.textContent = msg;

  status.style.color = ok ? 'green' : 'crimson';

  status.style.display = 'block';

}

sendBtn.addEventListener('click', ()=>{

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){

    showStatus('Please fill in all fields.', false);

    return;

  }

  if(!isEmailLike(email)){

    showStatus('Please enter a valid email address.', false);

    return;

  }

  showStatus('Sending...', true);

  sendBtn.disabled = true;

  setTimeout(()=>{

    showStatus('Message sent — thank you! I will reply to ' + email + ' when available.');

    document.getElementById('name').value = '';

    document.getElementById('email').value = '';

    document.getElementById('message').value = '';

    sendBtn.disabled = false;

    sendBtn.focus();

  }, 650);

});