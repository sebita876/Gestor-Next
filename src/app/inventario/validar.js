export function ValidarCat(listaCat,nombre){
    console.log("entro funcion")
    const array = listaCat.map(elemento => elemento.props.nombre === nombre)
    const validacion = array.includes(true) 
    console.log(array,"Array")
    const nombreValido = validarSoloLetras(nombre)
    console.log(validacion,"Validar si en array hay alguno")
    console.log(nombreValido,"Si no tiene numeros")
    if(validacion == false && nombreValido == true){
        return true 
    }else{
        return false
    }
}
function validarSoloLetras(texto) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(texto);
}