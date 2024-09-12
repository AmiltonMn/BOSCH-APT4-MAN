import style from "./CSS/Produtos.module.css"
import { Buttons } from "./components/Buttons"
import { Card } from './components/Card'
import produtos from './constants/produtos.json'

export default function ProdPage(){
    return (
        <>
        <Buttons />
            <div style={{display:'flex', justifyContent:'center', marginTop: '90px'}}>
                <h2>Showroom de produtos</h2>
            </div>
            
            <div className={style.CardDeck}>
                {produtos.map((item) => {
                return(
                <Card status={item.state} name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
                )
                })}
            </div>
        </>
    )
}