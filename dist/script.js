// Classe que representa um funcionário da empresa
class Funcionario {
    nome; // Nome do funcionário
    idade; // Idade do funcionário
    funcao; // Função/cargo do funcionário
    setorNaEmpresa; // Setor/departamento onde ele trabalha
    // Construtor para inicializar um novo funcionário
    constructor(n, i, f, sE) {
        this.nome = n;
        this.idade = i;
        this.funcao = f;
        this.setorNaEmpresa = sE;
    }
}
// Classe para avaliar e recomendar ações de motivação para o funcionário
class MotivacaoFuncionario {
    salarioSatisfatorio; // Está satisfeito com o salário?
    reconhecimento; // Sente-se reconhecido?
    ambienteSaudavel; // Ambiente de trabalho é saudável?
    oportunidadeCrescimento; // Tem oportunidades de crescimento?
    seSenteValorizado; // Sente-se valorizado no trabalho?
    // Construtor para inicializar as respostas
    constructor(s, r, aS, oC, sV) {
        this.salarioSatisfatorio = s;
        this.reconhecimento = r;
        this.ambienteSaudavel = aS;
        this.oportunidadeCrescimento = oC;
        this.seSenteValorizado = sV;
    }
    // Método que gera uma lista de ações recomendadas com base nas respostas
    recomendarAcoesMotivacionais() {
        const acoes = [];
        // Se o salário não é satisfatório
        if (!this.salarioSatisfatorio) {
            acoes.push("Rever política salarial ou oferecer bônus por desempenho.");
        }
        // Se não se sente reconhecido
        if (!this.reconhecimento) {
            acoes.push("Criar programa de reconhecimento e valorização dos colaboradores.");
        }
        // Se o ambiente não é saudável
        if (!this.ambienteSaudavel) {
            acoes.push("Investir na melhoria do ambiente de trabalho e gestão de pessoas.");
        }
        // Se não vê oportunidades de crescimento
        if (!this.oportunidadeCrescimento) {
            acoes.push("Oferecer treinamentos, capacitações e plano de carreira.");
        }
        // Se não se sente valorizado
        if (!this.seSenteValorizado) {
            acoes.push("Envolver o colaborador em decisões e dar mais autonomia.");
        }
        return acoes;
    }
}
// Função para perguntar ao usuário uma questão de "sim/não"
function perguntar(pergunta) {
    let resposta = prompt(pergunta + " (sim/não)");
    // Caso o usuário clique em "Cancelar"
    if (resposta === null) {
        return false;
    }
    // Retorna true se a resposta for "sim", senão false
    if (resposta.toLowerCase() === "sim") {
        return true;
    }
    else {
        return false;
    }
}
// Função principal do programa
function iniciarPrograma() {
    let relatorioFinal = []; // Guarda todas as respostas e recomendações
    while (true) { // Loop para cadastrar vários funcionários
        // Coleta dados pessoais do funcionário
        let nome = prompt("Digite seu nome");
        let idade = Number(prompt("Digite sua idade"));
        let funcao = prompt("Digite sua função na empresa:");
        let setor = prompt("Digite seu setor na empresa:");
        // Cria o objeto funcionário
        let funcionario = new Funcionario(nome, idade, funcao, setor);
        alert("A seguir, dê o seu feedback acerca do seu trabalho:");
        // Faz as perguntas de motivação
        let salario = perguntar("Você está satisfeito com o seu salário?");
        let reconhecimento = perguntar("Você se sente reconhecido no seu ambiente de trabalho?");
        let ambiente = perguntar("Seu ambiente de trabalho é agradável e saudável?");
        let oportunidade = perguntar("Você vê oportunidades de crescimento na empresa?");
        let valorizado = perguntar("Você se sente valorizado no que faz dentro da empresa?");
        // Cria o objeto motivação com as respostas
        let motivacao = new MotivacaoFuncionario(salario, reconhecimento, ambiente, oportunidade, valorizado);
        // Recebe a lista de ações recomendadas
        let recomendacao = motivacao.recomendarAcoesMotivacionais();
        // Monta o texto de relatório individual do funcionário
        let textoFuncionario = `Funcionário: ${funcionario.nome} (${funcionario.funcao} - ${funcionario.setorNaEmpresa})\n`;
        // Se não precisa de ações, escreve isso no relatório
        if (recomendacao.length === 0) {
            textoFuncionario += "- Nenhuma ação necessária. Funcionário bem motivado.\n";
        }
        else {
            // Adiciona cada recomendação na string
            for (let i = 0; i < recomendacao.length; i++) {
                textoFuncionario += `- ${recomendacao[i]}\n`;
            }
        }
        // Adiciona o relatório do funcionário à lista geral
        relatorioFinal.push(textoFuncionario);
        // Pergunta se quer continuar cadastrando
        let continuar = prompt("Deseja adicionar um novo colaborador? (sim/não)");
        // Sai do loop se o usuário disser "não"
        if (!continuar || continuar.toLowerCase() === "nao") {
            break;
        }
    }
    // Monta o relatório final completo
    let relatorio = "*** RELATÓRIO DE FEEDBACK DOS COLABORADORES ***\n\n";
    for (let r of relatorioFinal) {
        relatorio += r + '\n';
    }
    alert(relatorio);
}
iniciarPrograma();
export {};
//# sourceMappingURL=script.js.map