import style from "../CSS/Button.module.css"

export const Buttons = () => {
    return(
        <div className={style.wrapBtns}>
            <button><a href="/Produtos">Produtos</a></button>
            <button><a href="/ApiRM">API</a></button>
            <button><a href="/Map">Map</a></button>
            <button><a href="/Graficos">Gráficos</a></button>
        </div>
    )
}