
import style from "./CSS/App.module.css"
import { Buttons } from "./components/Buttons"
function App() {

  return (
    <>
      <Buttons />
      <div className={style.wrapPage}>
        <h1><b>Exercícios de manutenção</b></h1>
      </div>
    </>
  )
}

export default App
