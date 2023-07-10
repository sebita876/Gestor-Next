'use client'
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { validarInicio } from "./register/validar";
export default function Base() {
    const router = useRouter()
    const handleClick = async () => {
        const user = document.getElementById("user").value
        const pass = document.getElementById("pass").value
        const validar = await validarInicio(user,pass)
        if(validar==true){
            setCookie(null, "isLogged", "true", {
                maxAge: 3600,
                path: "/",
                });
            router.push('/inventario')
        }else{
            document.getElementById("H1 hidden").hidden = false
        }
    }
    const register = () =>{
        router.push('/register')
    }
    return (
        <div>
            <div className='fondo' />
            <div className='fotoAdox' />
            <div className='login'>
                <div className='container'>
                    <h1 id="H1 hidden" className="text"hidden={true}>Usuario no encontrado</h1>
                    <input type="number" id="user" placeholder="DNI" className='inputTextLogin' />
                    <input type="text" id="pass" placeholder="Contraseña" className='inputTextLogin' />
                    <button className="botom" onClick={()=>handleClick(  ) }> Iniciar Sesión</button>
                    <button className="botom" onClick={()=>register()}>Registrarse</button>
                </div>
            </div>
        </div>
    );
}