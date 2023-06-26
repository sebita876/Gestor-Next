export function Lista ({nombre,id})
{   
    return <li className="li" key={id}>{nombre}</li>  
}