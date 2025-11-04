// Arquivo: autenticacao.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const btnCriarConta = document.getElementById('btnCriarConta');

    // Função principal de login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailDigitado = emailInput.value.trim();
        const senhaDigitada = senhaInput.value;

        // 1. Tenta carregar os dados de login salvos
        const dadosLoginStr = localStorage.getItem('dadosLogin');
        const dadosLoginSalvo = dadosLoginStr ? JSON.parse(dadosLoginStr) : null;
        
        // 2. Verifica se existe um cadastro e se as credenciais batem
        if (
            dadosLoginSalvo &&
            dadosLoginSalvo.email === emailDigitado &&
            dadosLoginSalvo.senha === senhaDigitada &&
            dadosLoginSalvo.senha !== '' // Garante que a senha não é vazia
        ) {
            // Sucesso no Login
            // Utilizando o console para logs, já que alert() é evitado
            console.log('Login realizado com sucesso! Redirecionando para a Home.');
            // Redireciona para a tela de Home
            window.location.href = '../Tela De Home/home.html'; 
        } else if (dadosLoginSalvo && dadosLoginSalvo.email === emailDigitado && dadosLoginSalvo.senha === '') {
            // E-mail existe, mas o cadastro não foi finalizado (sem senha)
            console.warn('Seu cadastro está incompleto. Redirecionando para a finalização do cadastro.');
            // Redireciona para a finalização do cadastro
            window.location.href = '../CadastrosPais/cadastrospais.html'; 
        } else {
            // Falha no Login
            console.error('E-mail ou senha incorretos, ou usuário não cadastrado.');
           
            alert('E-mail ou senha incorretos, ou usuário não cadastrado.'); 
        }
    });

    // Redirecionamento para a criação de conta
    btnCriarConta.addEventListener('click', () => {
        // Redireciona para a tela de login/cadastro inicial
        window.location.href = '../Tela De Login/login.html'; 
    });
});
