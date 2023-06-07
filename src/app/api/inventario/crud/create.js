import mongoose from "mongoose";


function Crear(){
    const herramieta = new herramientas({
        categoria:'siu'
    })
    herramieta.save();
}
export default Crear