import QuestaoModel from "../model/questao"
import styles from '../styles/Questinonario.module.css'
 interface QuestinonarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    inPraProximoPasso: () => void
 }
export default function Questinonario(props: QuestinonarioProps){
    return (
        <div className={styles.questionario}>

        </div>
    )
}