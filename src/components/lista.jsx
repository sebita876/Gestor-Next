export function Lista({ nombre, id, funcion, state }) {
  const handleClick = () => {
    funcion(nombre, state)
  };
  return <li className="li" onClick={handleClick} key={id}>{nombre}</li>
}