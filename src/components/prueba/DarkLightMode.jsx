import React from 'react'

const DarkLightMode = () => {

    const [darkMode, setDarkMode] = useState(second)

  return (
    <>
        <div className={`default ${darkMode ? "dark" : "light"} `}>
            <h1>Cambio de color Tema</h1>
            <button onClick={toggleTheme}>
                {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quas dignissimos deleniti in. Ipsa excepturi pariatur assumenda perferendis adipisci illum, expedita laborum libero voluptatibus magnam ea porro neque eaque officiis!</p>
        </div>
    </>
  )
}

export default DarkLightMode