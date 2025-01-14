import { useEffect, useState } from "react";
import QuestaoModel from "../model/questao";

import Questinonario from "../components/Questinonario";
import { useRouter } from "next/router";



const BASE_URL = "http://localhost:3000/api";
export default function Home() {
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostaCertas, setRespostaCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resposta = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resposta.json();
    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resposta.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);
  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostaCertas(respostaCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    if(questao){
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximoIndice];
      
    }
  }

  function inPraProximoPasso() {
    const proximoId = idProximaPergunta();

    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostaCertas
      }
    })
  }
  return (
    <Questinonario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      inPraProximoPasso={inPraProximoPasso}
    />
  );
}
