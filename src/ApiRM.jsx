import { api } from "./api/rmApi"
import { Buttons } from "./components/Buttons"
import { CardApi } from './components/Card'
import { useEffect, useState } from "react"
import { Modal } from "./components/ModalApi"
import style from "./CSS/ApiRM.module.css"


export default function ApiPage() {
    const [page, setPage] = useState("")
    const [modal, setModal] = useState()
    const [character, setCharacter] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${character}`).then((response) => {
            if(!response.data.results){
            console.log("Vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
            alert("Esta pagina nao contem este personagem")
            }
            console.error(error)
        })
        }, [page, character])

    return(
        <>
            {modal !== undefined && <Modal data={data[modal]} close={() => setModal()}/>}
            <Buttons />
            <div style={{display:'flex', justifyContent:'center', marginTop:'90px'}}>
                <h2>Rick and Morty API</h2>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <input style={{padding: '5px', borderRadius:'15px', marginRight:'15px'}} type="number" placeholder="Página de 1 a 43" value={page} onChange={(e) => setPage(e.target.value)}/>
                <input style={{padding: '5px', borderRadius:'15px', marginRight:'15px'}} type="text" placeholder="Nome" value={character} onChange={(e) => setCharacter(e.target.value)}/>
            </div>
            <div className={style.CardDeckApi}>
            {data.map((item, index) => {   
                return(
                <div key={item.id} onClick={() => setModal(index)}>
                    <CardApi name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender} image={item.image}/>
                </div>
                )
            })}
            </div>
        </>
    )
    
}
    