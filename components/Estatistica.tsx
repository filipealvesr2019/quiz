import styles from "../styles/Estatistica.module.css";

interface EstatisticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}
export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className={styles.Estatistica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.corFundo ?? "#fdd60f",
          color: props.corFonte ?? "#333",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
}
