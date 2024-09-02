// JavaScript para rolagem suave para seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Validação do formulário de cadastro
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = signupForm.querySelector('input[type="password"]').value;
    const confirmPassword = signupForm.querySelector('input[placeholder="Confirme sua Senha"]').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, verifique.');
    } else {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar os dados ao servidor
    }
});

// Validação do formulário de login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Aqui você pode adicionar a lógica para autenticar o usuário
    alert('Login realizado com sucesso!');
});

// Exemplo simples de implementação de chat
const chatBox = document.createElement('div');
chatBox.style.position = 'fixed';
chatBox.style.bottom = '0';
chatBox.style.right = '0';
chatBox.style.width = '300px';
chatBox.style.height = '400px';
chatBox.style.backgroundColor = '#fff';
chatBox.style.border = '1px solid #ccc';
chatBox.style.borderRadius = '10px 10px 0 0';
chatBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
chatBox.style.display = 'none'; // Inicialmente escondido

const chatHeader = document.createElement('div');
chatHeader.style.backgroundColor = '#ff5e5e';
chatHeader.style.padding = '10px';
chatHeader.style.color = '#fff';
chatHeader.style.textAlign = 'center';
chatHeader.style.cursor = 'pointer';
chatHeader.textContent = 'Chat ao Vivo';

chatHeader.addEventListener('click', function() {
    const chatContent = chatBox.querySelector('.chat-content');
    if (chatContent.style.display === 'none') {
        chatContent.style.display = 'block';
        chatBox.style.height = '400px';
    } else {
        chatContent.style.display = 'none';
        chatBox.style.height = '40px';
    }
});

const chatContent = document.createElement('div');
chatContent.className = 'chat-content';
chatContent.style.padding = '10px';
chatContent.style.overflowY = 'scroll';
chatContent.style.height = '340px';
chatContent.style.display = 'none';

const chatInput = document.createElement('input');
chatInput.style.width = '100%';
chatInput.style.padding = '10px';
chatInput.style.border = 'none';
chatInput.style.borderTop = '1px solid #ccc';
chatInput.style.borderRadius = '0 0 10px 10px';
chatInput.placeholder = 'Digite sua mensagem...';

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.style.marginBottom = '10px';
        message.textContent = `Você: ${chatInput.value}`;
        chatContent.appendChild(message);
        chatContent.scrollTop = chatContent.scrollHeight;
        chatInput.value = '';
        // Aqui você pode adicionar a lógica para enviar a mensagem ao servidor
    }
});

chatBox.appendChild(chatHeader);
chatBox.appendChild(chatContent);
chatBox.appendChild(chatInput);
document.body.appendChild(chatBox);

// Mostrando a caixa de chat após 5 segundos
setTimeout(() => {
    chatBox.style.display = 'block';
}, 5000);
