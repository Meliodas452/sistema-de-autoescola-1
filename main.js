document.addEventListener("DOMContentLoaded", function() {
    // Função para adicionar o nome do aluno em uma célula
    function adicionarNome(horario, diaSemana) {
        const cellId = `${diaSemana.toLowerCase()}-${horario.replace(':', '')}`;
        const cell = document.getElementById(cellId);

        if (cell) {
            const nomeAluno = prompt(`Digite o nome do aluno para a aula em ${diaSemana} às ${horario}:`);
            if (nomeAluno !== null) {
                cell.innerText = nomeAluno;
            }
        }
    }

    // Exemplo de chamada da função para adicionar o nome do aluno
    adicionarNome('19:40', 'Segunda');


    document.addEventListener("DOMContentLoaded", function () {
        const table = document.getElementById('aulaTable');
    
        // Adiciona evento de clique à tabela
        table.addEventListener('click', function (event) {
            const cell = event.target;
    
            // Verifica se o clique ocorreu em uma célula vazia
            if (cell.tagName === 'TD') {
                const nomeAtual = cell.innerText.trim();
                const nomeAluno = prompt('Digite o nome do aluno:', nomeAtual);
    
                // Verifica se o usuário pressionou "Cancelar" ou inseriu uma string vazia
                if (nomeAluno !== null) {
                    // Se o usuário pressionou "Cancelar" ou inseriu uma string vazia, define o conteúdo da célula como vazio
                    if (nomeAluno === '') {
                        cell.innerText = '';
                    } else {
                        cell.innerText = nomeAluno;
                    }
                }
            }
        });
    
        // Adiciona evento de clique para apagar o conteúdo da célula ao clicar duas vezes
        table.addEventListener('dblclick', function (event) {
            const cell = event.target;
    
            // Verifica se o clique ocorreu em uma célula
            if (cell.tagName === 'TD') {
                // Apaga o conteúdo da célula
                cell.innerText = '';
            }
        });
    });
    
});


