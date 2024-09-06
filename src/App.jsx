
import style from "./CSS/App.module.css"
import { Buttons } from "./components/Buttons"
function App() {

  return (
    <>
    <Buttons />
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
    </div>
    </>
  )
}

export default App
