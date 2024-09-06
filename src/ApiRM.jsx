import { api } from "./api/rmApi"
import { Buttons } from "./components/Buttons"
import { CardApi } from './components/Card'
import { useEffect, useState } from "react"
import style from "./CSS/ApiRM.module.css"


export default function ApiPage() {
    const [page, setPage] = useState("")
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
            <Buttons />
            <h2>Rick and Morty API</h2>
            <div>
                <input type="number" placeholder="1/43" value={page} onChange={(e) => setPage(e.target.value)}/>
                <input type="text" placeholder="Name" value={character} onChange={(e) => setCharacter(e.target.value)}/>
            </div>
            <div className={style.CardDeckApi}>
            {data.map((item) => {   
                return(
                <div key={item.id}>
                <CardApi name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender} image={item.image}  />
                {/* <button onClick={() => {}}>Info</button> */}
                </div>
                )
            })}
            </div>
        </>
    )
    
}
    