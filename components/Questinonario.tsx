import QuestaoModel from "../model/questao";
import styles from "../styles/Questinonario.module.css";
import Botao from "./Botao";
import Questao from "./Questao";
interface QuestinonarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  inPraProximoPasso: () => void;
}
export default function Questinonario(props: QuestinonarioProps) {
  function respostaFornecida(indece: number) {}
  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.inPraProximoPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={props.inPraProximoPasso}
        texto={props.ultima ? "Finalizar" : "Proxima"}
      />
    </div>
  );
}
