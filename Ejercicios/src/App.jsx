import './App.css'
import Card from './Components/UseState/Card'
import ConditionalRender from './Components/UseState/ConditionalRender'
import { ConditionalRenderAdvanced } from './Components/UseState/ConditionalRenderAdvanced'
import CustomBotton from './Components/UseState/CustomBotton'
import Header from './Components/UseState/Header'
import Onclick from './Components/UseState/Onclick'
import ToggleVisibility from './Components/UseState/ToggleVisibility'
import UseList from './Components/UseState/UseList'
import UserList from './Components/UseState/UserList'
import IsLogged from './components/UseState/isLogged'


function App() {
  
  return (
    <>
      <Header></Header>
      <IsLogged></IsLogged>
      <div style={{background:"red", fontSize:"16px"}}>
        <h3>Esto tiene estilo</h3>
      </div>
      <Onclick></Onclick>
      <UseList></UseList>
      <CustomBotton color = {"red"} text = {"CustomBotton"}></CustomBotton>
      <ConditionalRender condition={false}/>
      <Card title = {"titulo"} body = {"cuerpo"} footer = {"pie"}/>
      <ToggleVisibility/>
      <UserList array = {["antonio", "jose", "pepe", "maria"]}/>
      <ConditionalRenderAdvanced isLoggedIn={true} userRole="admin"/>
    </>
    
  )
}

export default App
