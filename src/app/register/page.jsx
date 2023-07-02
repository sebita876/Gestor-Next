export default function Login() {
    return (
        <div>
            <div className='fondo' />
            <div className='fotoAdox' />
            <div className='login'>
                <div className='container'>
                    <input type="text" placeholder="Nombre de Usuario" className='inputTextRegister' />
                    <input type="text" placeholder="Contraseña" className='inputTextRegister' />
                    <input type="text" placeholder="Repetir Contaseña" className='inputTextRegister' />
                    <input type="submit" value="Registrarse" className='sumbmit' />
                </div>
            </div>
        </div>
    );
}