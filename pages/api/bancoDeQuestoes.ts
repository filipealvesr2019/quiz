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
        RespostaModel.errada('coco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ])
]

export default questoes