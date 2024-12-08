import RespostaModel from "../model/resposta";
import styles from "../styles/Resposta.module.css";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corLetra: string;
}
export default function Resposta(props) {
  return (
    <>
      <div className={styles.resposta}>
        <div className={styles.conteudoResposta}>
          <div className={styles.frente}>
            <div className={styles.letra}>

            </div>
          </div>
          <div className={styles.verso}>
            
            </div>
        </div>
      </div>
    </>
  );
}
