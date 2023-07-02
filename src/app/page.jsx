import Link from "next/link";

const links = [{
    label: 'Iniciar Sesion',
    route: '/inventario'
}, {
    label: 'Registrarse',
    route: '/register'
}]
export default function Base() {
    return (
        <div>
            <div className='fondo' />
            <div className='fotoAdox' />
            <div className='login'>
                <div className='container'>
                    <input type="text" placeholder="Nombre de usuario" className='inputTextLogin' />
                    <input type="text" placeholder="Contraseña" className='inputTextLogin' />
                    {links.map(({ label, route }) => (
                        <p key={route}>
                            <Link href={route} className="Link">{label}</Link>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}