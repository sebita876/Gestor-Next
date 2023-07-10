import axios from "axios";
async function traerUsuarios() {
    const listaUsuarios = await axios.get('/api/usuarios')
    return listaUsuarios
}
async function guardarUsuario(dni, contraseña, admin) {
    await axios.post('/api/usuarios', {
        dni: dni,
        contraseña: contraseña,
        admin: admin
    }).then(data => console.log("guardado|"))
}
export async function validarUsuario(closeModal) {
    const dni = document.getElementById('DNI').value
    const contraseña = document.getElementById('contraseña').value
    const repContraseña = document.getElementById('RepContraseña').value
    const opcion = document.querySelector('input[name="opcion"]:checked')
    const id = opcion.id
    const adminValidar = document.getElementById(id).value
    let validarContraseña, bool
    const listaUsuarios = await traerUsuarios()
    const arrayDni = listaUsuarios.data.datos.map(elemento => elemento.dni == dni)
    const validacionDni = arrayDni.includes(true)
    if(contraseña != ""){
        if (contraseña == repContraseña) {
            validarContraseña = true
        } else {
            validarContraseña = false
        }
    }else{
        document.getElementById("H1hidden").hidden = false
        document.getElementById("H2hidden").hidden = true
        return
    }
    if (adminValidar.value == "true") {
        bool = true
    } else {
        bool = false
    }
    if (validacionDni == false && validarContraseña == true && (bool == true || bool == false)) {
        guardarUsuario(dni, contraseña, bool)
        closeModal()
        document.getElementById("H1hidden").hidden = true
        document.getElementById("H2hidden").hidden = false
    } else {
        console.log("no guardado")
        closeModal()
        document.getElementById("H2hidden").hidden = true
        document.getElementById("H1hidden").hidden = false
    }
}
export async function verificarAdmin(closeModal) {
    const contraseña = document.getElementById("contraseñaAdmin").value
    const dni = document.getElementById("dniAdmin").value
    const listaUsuarios = await traerUsuarios()
    const array = listaUsuarios.data.datos.map(elemento => elemento.dni == dni && elemento.contraseña == contraseña);
    const validar = array.includes(true)
    console.log(array, validar)
    if (validar == true) {
        validarUsuario(closeModal)
        closeModal()
    } else {
        console.log("else")
        document.getElementById("HI hidden").hidden = false
        document.getElementById("H2 hidden").hidden = true
    }
}
export async function validarInicio(user,pass){
    const listaUsuarios = await traerUsuarios()
    const array = listaUsuarios.data.datos.map(elemento => elemento.dni == user && elemento.contraseña == pass);
    const validar = array.includes(true)
    console.log(validar)
    if (validar == true){
        return true
    }else{
        return false
    }
}