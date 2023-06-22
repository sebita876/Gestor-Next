
export function Articulo ({tipo,fecha,id,categoria}){
    return <tr key={id}>
        <td className="lista">{tipo}</td>
        <td className="lista">{fecha}</td>
        <td className="lista">{id}</td>
        <td className="lista">{categoria}</td>
    </tr>
}