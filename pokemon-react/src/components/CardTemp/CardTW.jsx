
export const CardTW = (props) => {

    const { nombre, descripcion, imagen } = props

  return (
    <div className={"bg-blue-400 border-4 border-black p-8 rounded-xl"}>
      <img className="w-full aspect-square rounded-xl object-cover" src={"https://imgs.search.brave.com/HVPp0qDXLYwFs2VnVLZ0wG_7XDVxRGJ150q_kaJoUEo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8zOS85OC9l/cnJvci00MDQtcGFn/ZS1ub3QtZm91bmQt/dmVjdG9yLTE0NDYz/OTk4LmpwZw"}/>
        <div>
          <h1 className="font-extrabold" >{nombre}</h1>
          <p className="italic">{descripcion}</p>
        </div>
    </div>
  )
}