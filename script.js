document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade das senhas
    document.getElementById('showSenha').addEventListener('change', function() {
        const senhaInput = document.getElementById('senha');
        if (this.checked) {
            senhaInput.type = 'text'; // Mostrar senha
        } else {
            senhaInput.type = 'password'; // Ocultar senha
        }
    });

    // Função para alternar a visibilidade da confirmação de senha
    document.getElementById('showConfirmaSenha').addEventListener('change', function() {
        const confirmaSenhaInput = document.getElementById('confirme-senha');
        if (this.checked) {
            confirmaSenhaInput.type = 'text'; // Mostrar confirmação de senha
        } else {
            confirmaSenhaInput.type = 'password'; // Ocultar confirmação de senha
        }
    });

    // Evento para validar o formulário antes de enviar
    document.getElementById('formulario').addEventListener('submit', function(event) {
        // Evita o envio do formulário até que a validação seja feita
        event.preventDefault();

        // Validação do RG (apenas números e até 9 dígitos)
        const rg = document.getElementById("rg").value;
        const rgPattern = /^\d{1,9}$/;
        if (!rgPattern.test(rg)) {
            alert("RG inválido. O RG deve conter apenas números e até 9 dígitos.");
            return; // Impede o envio do formulário
        }

        // Validar senhas
        const senha = document.getElementById("senha").value;
        const confirmeSenha = document.getElementById("confirme-senha").value;
        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem. Por favor, verifique.");
            return; // Impede o envio do formulário
        }

        // Verificar se as fotos foram enviadas
        const fotoFrente = document.getElementById('foto-frente').files.length;
        const fotoVerso = document.getElementById('foto-verso').files.length;
        if (fotoFrente === 0 || fotoVerso === 0) {
            alert("É obrigatório o envio das fotos do RG (frente e verso).");
            return; // Impede o envio do formulário
        }

        // Se tudo estiver correto, você pode enviar o formulário
        alert("Formulário enviado com sucesso!");
        // Aqui você pode colocar o código para enviar os dados via AJAX ou outra forma de envio
    });
});
