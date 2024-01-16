//------IMPORT-----------------
import "./App.css";
import React from 'react';
import RegistrarFormulario from "./components/prueba/RegistrarFormulario";
import TodoListTailWindCss from "./components/prueba/TodoListTailWindCss";
import ComponenteProps from "./components/Props/ComponenteProps";
import UseEffectBasic from "./components/UseEffect/UseEffectBasic";
import ResizeListener from "./components/UseEffect/ResizeListener";
import GitHubUsers from "./components/UseEffect/GitHubUserCardApi/GitHubUsers";


//--------Declaración de variables globales--------

const App = () => {
  //---------Hooks---------------------

  //---------Declaración de variables locales------
  // const texto = "Hola";
  // const numero = 1;
  // const array = ["pera", "platano", "manzana", "uva", "fresa"];
  // const objeto = {
  //   nombre: "Antonio",
  //   edad : 20,
  // };
  //---------Funciones del componente------------
   return (
    // <div>
    //   <h1>Ejemplo básico JSX</h1>
    //   <h2>Variables en JSX y objetos</h2>
    //   <div>
    //     <h3>La variable del texto vale {texto}</h3>
    //     <h3>La variable del numero vale {numero}</h3>
    //     <h3>La variable del array vale {array.map((fruta, index) => (
    //                                         <li key={index}>{fruta}</li>))}</h3>
    //     <h3>Me llamo {objeto.nombre} y tengo {objeto.edad} años</h3>
    //   </div>
    // </div>
    
    // <>
    // <RegistrarFormulario></RegistrarFormulario>

    // <TodoListTailWindCss></TodoListTailWindCss>
    // </>

    <>
    <GitHubUsers></GitHubUsers>
    </>
    
    )
}

export default App