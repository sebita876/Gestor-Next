
export function Articulo({ nombre, fecha, id, categoria, cantidad,tema }) {
    return <tr key={id}>
        <td className={tema ? 'lista-white':'lista'} key={id}>{nombre}</td>
        <td className={tema ? 'lista-white':'lista'} key={id}>{fecha}</td>
        <td className={tema ? 'lista-white':'lista'} key={id}>{id}</td>
        <td className={tema ? 'lista-white':'lista'} key={id}>{categoria}</td>
        <td className={tema ? 'lista-white':'lista'} key={id}>{cantidad}</td>
    </tr>
}