
import style from "../styles/Botao.module.css"
interface BotaoProps {
    href?: string
    texto: string
    onClick?: (e: any) => void
}
export default function Botao(props: BotaoProps){
    return (
        <>
        <button className={style.botao} onClick={props.onClick}>{props.texto}</button>
        </>
    )
}