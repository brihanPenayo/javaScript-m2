import PokemonStyle from "./PokemonCardStyles.module.css"

export const PokemonCard = (props) => {
  const { nombre, descripcion, imagen } = props
    
  // const [descripcion, setDescripcion] = useState("Descripción Inicial")

  // nombre ?? "No hay nombre"   
  // nombre ? nombre : "No hay nombre"
  // nombre && <h1>{nombre}</h1>

  return (
    <div className={PokemonStyle.card}>
      <img src={imagen ?? "https://imgs.search.brave.com/HVPp0qDXLYwFs2VnVLZ0wG_7XDVxRGJ150q_kaJoUEo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8zOS85OC9l/cnJvci00MDQtcGFn/ZS1ub3QtZm91bmQt/dmVjdG9yLTE0NDYz/OTk4LmpwZw"}/>
        <div>
          <h1>{nombre ?? "No hay nombre"}</h1>
          <p>{descripcion}</p>
        </div>
    </div>
  )
}