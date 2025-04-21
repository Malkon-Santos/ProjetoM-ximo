let prompt = require('prompt-sync')();
let Professor = require('../modelo/professor.js'); 
let con = require('../conexao/criarConexao.js');

function menu_proofessor() {
  let opcao = '';

  while (opcao !== '0') {
    console.log('--- MENU PROFESSOR ---');
    console.log('1 - Cadastrar Aluno');
    console.log('2 - Excluir Aluno');
    console.log('3 - Cadastrar Atividade');
    console.log('4 - Excluir Atividade');
    console.log('5 - Analisar Relatório');
    console.log('6 - Ver Feedback');
    console.log('0 - Sair');

    opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') {
      let user = prompt('Digite o nome do aluno: ');
      prof.cadastrarAluno(con, user);

    } else if (opcao === '2') {
      let user = prompt('Digite o nome do aluno a excluir: ');
      prof.excluirAluno(con, user);

    } else if (opcao === '3') {
      let conteudo = prompt('Digite o conteúdo da atividade: ');
      let idatividade = prompt('Digite o ID da atividade: ');
      prof.cadastrarAtividade(con, conteudo, idatividade);

    } else if (opcao === '4') {
      let idatividade = prompt('Digite o ID da atividade a excluir: ');
      prof.excluirAtividade(con, idatividade);

    } else if (opcao === '5') {
      let idRelatorio = prompt('Digite o ID do relatório: ');
      prof.analisarRelatorio(con, idRelatorio);

    } else if (opcao === '6') {
      let idFeedback = prompt('Digite o ID do feedback: ');
      prof.verFedeback(con, idFeedback);

    } else if (opcao === '0') {
      console.log('Saindo...');
      con.end();

    } else {
      console.log('Opção inválida. Tente novamente.');
    }
  }
}
menu_proofessor()
module.exports = { menu_proofessor };
