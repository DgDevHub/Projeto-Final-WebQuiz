document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        { pergunta: "Pergunta 1", respostas: ["a", "b", "c", "d"], correta: 1 },
        { pergunta: "Qual das seguintes práticas é a mais eficaz para proteger senhas?", respostas: [" Usar a mesma senha para todas as contas", "Ativar a autenticação de dois fatores", "Compartilhar senhas apenas com amigos confiáveis", "Anotar senhas em um caderno"], correta: 1 },
        { pergunta: "Pergunta 3", respostas: ["a", "b", "c", "d"], correta: 1 },
        { pergunta: "Pergunta 4", respostas: ["a", "b", "c", "d"], correta: 1 },
        { pergunta: "Pergunta 5", respostas: ["a", "b", "c", "d"], correta: 1 }
    ];

    let perguntaAtual = 0;
    const Pergunta = document.getElementById("Pergunta");
    const containerRespostas = document.getElementById("containerRespostas");
    const botoesResposta = [
        document.getElementById('resposta0'),
        document.getElementById('resposta1'),
        document.getElementById('resposta2'),
        document.getElementById('resposta3')
    ];
    const nome = sessionStorage.getItem("nomeUser")
    const mensagem = document.getElementById('mensagem');

    function carregarPergunta() {
        const pergunta = perguntas[perguntaAtual];
        Pergunta.textContent = pergunta.pergunta;
        botoesResposta.forEach((botao, index) => {
            botao.textContent = pergunta.respostas[index];
            botao.onclick = () => verificarResposta(index);
        });
        mensagem.classList.add('hide'); 
    }

    function verificarResposta(respostaEscolhida) {
        const pergunta = perguntas[perguntaAtual];
        if (respostaEscolhida === pergunta.correta) {
            mostrarMensagemAcerto();
        } else {
            mostrarMensagemErro();
        }
    }

    function mostrarMensagemAcerto() {
        mensagem.textContent = "Resposta correta!";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('erro');
        mensagem.classList.add('acerto');
        setTimeout(() => {
            perguntaAtual++;
            if (perguntaAtual < perguntas.length) {
                carregarPergunta();
            } else {
                mostrarMensagemSucesso();
            }
        }, 1000); 
    }

    function mostrarMensagemErro() {
        mensagem.textContent = "Resposta incorreta. Reiniciando o quiz...";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('acerto');
        mensagem.classList.add('erro');
        setTimeout(() => {
            perguntaAtual = 0;
            carregarPergunta();
        }, 1000); 
    }

    function mostrarMensagemSucesso() {
        mensagem.textContent = "Parabéns " + nome+"! Você completou o quiz.";
        mensagem.classList.remove('hide');
        mensagem.classList.remove('erro');
        mensagem.classList.add('acerto');
        setTimeout(() => {
            sessionStorage.removeItem("nomeUser")
            window.location.href= "../html/home.html"; 
        }, 3000); 
    }

    carregarPergunta();
});
