
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const googleBtn = document.getElementById('googleBtn');
const termsLink = document.getElementById('termsLink');
const privacyLink = document.getElementById('privacyLink');


signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value;
    
    if (email) {
        alert(`Cadastro iniciado com o e-mail: ${email}\n\nEm uma aplicação real, você seria redirecionado para completar o cadastro.`);
        emailInput.value = '';
    }
});

googleBtn.addEventListener('click', function() {
    alert('Em uma aplicação real, você seria redirecionado para autenticação com o Google.');
});


termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Termos de Serviço seriam exibidos aqui.');
});


privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Política de Privacidade seria exibida aqui.');
});


emailInput.addEventListener('input', function() {
    this.style.borderColor = this.validity.valid ? '#4CAF50' : '';
});