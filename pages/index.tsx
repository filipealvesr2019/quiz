import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import Botao from "../components/Botao";
import styles from '../styles/Index.module.css'
import Questinonario from "../components/Questinonario";

const questaoMock = new QuestaoModel(1, "Melhor cor", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelha"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preta"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);
  // function respostaFornecida(indice: number) {
  //   console.log(indice);
  //   setQuestao(questao.responderCom(indice));
  // }
  // function tempoEsgotado() {
  //   if(questao.naoRespondida){
  //     setQuestao(questao.responderCom(-1));

  //   }
  // }
  function questaoRespondida(questao:QuestaoModel){

  }

  function inPraProximoPasso(){

  }
  return (
    <div
 
      className={styles.container}
    >
      <Questinonario  questao={questao} ultima={false} questaoRespondida={questaoRespondida} inPraProximoPasso={inPraProximoPasso}/>
      {/* <Questao tempoPraResposta={5} valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado}/>
      <Botao texto="Proxima" href="/resultado" /> */}
      </div>
  );
}
