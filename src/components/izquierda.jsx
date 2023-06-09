export function Izquierda({}){
    return (
    <div className="izquierda" >
        <h1 className="h1">Categorias</h1>
            <ul>
                <li className="li" >Todos</li>
                    {listaCat}
            </ul>
    </div>)
}