import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bixo transmite a doença de chagas', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum".', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(303, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(404, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isósceles'),
        RespostaModel.errada('Retângulo'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(505, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Dom Pedro I e Carlos Gomes'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.errada('Castro Alves'),
        RespostaModel.certa('Dom Pedro I e Evaristo da Veiga'),
    ]),
    new QuestaoModel(606, 'Qual é o menor país do mundo?', [
        RespostaModel.errada('Mônaco'),
        RespostaModel.errada('Malta'),
        RespostaModel.errada('San Marino'),
        RespostaModel.certa('Vaticano'),
    ]),
    new QuestaoModel(707, 'Qual é o maior planeta do sistema solar?', [
        RespostaModel.errada('Terra'),
        RespostaModel.errada('Marte'),
        RespostaModel.errada('Saturno'),
        RespostaModel.certa('Júpiter'),
    ]),
    new QuestaoModel(808, 'Qual é a montanha mais alta do mundo?', [
        RespostaModel.errada('K2'),
        RespostaModel.errada('Kangchenjunga'),
        RespostaModel.errada('Lhotse'),
        RespostaModel.certa('Everest'),
    ]),
    new QuestaoModel(909, 'Quantas casas decimais tem o número pi?', [
        RespostaModel.errada('Duas'),
        RespostaModel.errada('Centenas'),
        RespostaModel.errada('Infinitas'),
        RespostaModel.certa('Infinitas'),
    ]),
    new QuestaoModel(1010, 'Em que parte do corpo humano é produzida a insulina?', [
        RespostaModel.errada('Fígado'),
        RespostaModel.errada('Baço'),
        RespostaModel.errada('Estômago'),
        RespostaModel.certa('Pâncreas'),
    ]),
];

export default questoes;
