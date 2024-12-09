import styles from "../styles/Questao.module.css";
import QuestaoModel from "../model/questao";
import Enunciado from "./Enunciado";
import Resposta from "../components/resposta";

interface QuestaoProps {
  valor: QuestaoModel;
}
export default function Questao(props: QuestaoProps) {
  const questao = props.valor;
  function renderizarRespostas() {
    return questao.respostas.map((resposta, index) => {
      return (
        <Resposta
        key={index}
          valor={resposta}
          indice={index}
          letra="A"
          corFundoLetra="#f2c866"
        />
      );
    });
  }
  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderizarRespostas()}
    </div>
  );
}
