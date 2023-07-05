'use client'
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
export default function Base() {
    const router = useRouter()
    const handleClick = () => {
        const user = document.getElementById("user").value
        const pass = document.getElementById("pass").value
        // const validar = validarInicio(user,pass)
        // if(validar==true){
        //     setCookie(null, "isLogged", "true", {
        //         maxAge: 3600, // Tiempo de vida de la cookie en segundos
        //         path: "/", // Ruta de acceso de la cookie
        //         });
        //     router.push('/inventario')
        // }else{
        //     // document.getElementById("H1 hidden").hidden = false
        // }
    }
    return (
        <div>
            <div className='fondo' />
            <div className='fotoAdox' />
            <div className='login'>
                <div className='container'>
                    <input type="text" id="user" placeholder="Nombre de usuario" className='inputTextLogin' />
                    <input type="text" id="pass" placeholder="Contraseña" className='inputTextLogin' />
                    <button onClick={()=>handleClick(  ) }> inventario</button>
                </div>
            </div>
        </div>
    );
}