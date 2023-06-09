
export function Articulo ({tipo,fecha,id,categoria}){
    return <tr key={id}>
        <td>{tipo}</td>
        <td>{fecha}</td>
        <td>{id}</td>
        <td>{categoria}</td>
    </tr>
}