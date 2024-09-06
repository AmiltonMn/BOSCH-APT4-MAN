import { useState, useEffect } from 'react'
import {Card, CardApi } from './components/Card'
import { Map } from './components/Map'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [character, setCharacter] = useState("")


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

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.CardDeck}>
            {produtos.map((item) => {
              return(
                <Card status={item.state} name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
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
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
            <Map/>
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
