import { useEffect, useState } from "react";
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


const BASE_URL = 'http://localhost:3000/api'
export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState(questaoMock);

  async function carregarIdsDasQuestoes(){
    const resposta = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resposta.json();
    setIdsDasQuestoes(idsDasQuestoes)
  }


  
  async function carregarQuestao(idQuestao: number){
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resposta.json();
    console.log(json)
  }

  useEffect(() =>{
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() =>{
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])
  function questaoRespondida(questao:QuestaoModel){

  }

  function inPraProximoPasso(){

  }
  return (
 
      <Questinonario  questao={questao} ultima={false} questaoRespondida={questaoRespondida} inPraProximoPasso={inPraProximoPasso}/>
  
  );
}
