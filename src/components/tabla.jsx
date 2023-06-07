export function Tabla ({tipo,fecha,id,categoria}){
    return <tr>
        <td>{tipo}</td>
        <td>{fecha}</td>
        <td>{id}</td>
        <td>{categoria}</td>
    </tr>
}