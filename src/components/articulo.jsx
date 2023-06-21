
export function Articulo ({tipo,fecha,id,categoria}){
    return <tr key={id}>
        <td className="lis">{tipo}</td>
        <td className="lis">{fecha}</td>
        <td className="lis">{id}</td>
        <td className="lis">{categoria}</td>
    </tr>
}