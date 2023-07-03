export function ValidarCat(listaCat, nombre) {
    const array = listaCat.map(elemento => elemento.props.nombre === nombre)
    const validacion = array.includes(true)
    const nombreValido = validarSoloLetras(nombre)
    if (validacion == false && nombreValido == true) {
        return true
    } else {
        return false
    }
}
export function ValidarArticulo(listaArticulo, nombre, cantidad) {
    const array = listaArticulo.map(elemento => elemento.props.nombre === nombre)
    const validacion = array.includes(true)
    const nombreValido = validarSoloLetras(nombre)
    const numeroValido = esNumerico(cantidad)
    if (validacion == false && nombreValido == true && numeroValido == true) {
        return true
    } else {
        return false
    }
}
export function ValidarId(listaArticulo, id) {
    id = parseInt(id)
    const array = listaArticulo.map(elemento => elemento.props.id === id)
    const validacion = array.includes(true)
    const numeroValido = esNumerico(id)
    if (validacion == true && numeroValido == true) {
        return true
    } else {
        return false
    }
}
export function ValidarEditarArticulo(listaArticulo, nombre, cantidad, categoria) {
    const arrayNombre = listaArticulo.map(elemento => elemento.props.nombre === nombre)
    const arrayCat = listaArticulo.map(elemento => elemento.props.categoria === categoria)
    const validacionNombre = arrayNombre.includes(true)
    const validacionCat = arrayCat.includes(true)
    const nombreValido = validarSoloLetras(nombre)
    const numeroValido = esNumerico(cantidad)
    if (validacionNombre == false && validacionCat == true && nombreValido == true && numeroValido == true) {
        return true
    } else {
        return false
    }
}
export function ValidarBorrarCat(listaCat, nombre) {
    const arrayNombre = listaCat.map(elemento => elemento.props.nombre === nombre)
    const validacionNombre = arrayNombre.includes(true)
    return validacionNombre
}
export function ValidarActualizarCat(listaCat, nombre, actualizar) {
    const arrayNombreNuevo = listaCat.map(elemento => elemento.props.nombre === actualizar)
    const validacionNombreNuevo = arrayNombreNuevo.includes(true)
    const arrayNombreViejo = listaCat.map(elemento => elemento.props.nombre === nombre)
    const validacionNombreViejo = arrayNombreViejo.includes(true)
    if (validacionNombreNuevo == false && validacionNombreViejo  == true) {
        return true
    }else{
        return false
    }
    
}
function validarSoloLetras(texto) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(texto);
}
function esNumerico(valor) {
    return /^\d+$/.test(valor);
}