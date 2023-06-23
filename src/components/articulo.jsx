
export function Articulo ({nombre,fecha,id,categoria,cantidad}){
    return <tr key={id}>
        <td className="lista" >{nombre}</td>
        <td className="lista">{fecha}</td>
        <td className="lista">{id}</td>
        <td className="lista">{categoria}</td>
        <td className="lista">{cantidad}</td>
    </tr>
}