import mongoose from "mongoose";
function Conectar ()
{
    mongoose.connect('mongodb://127.0.0.1:27017/inventario');
    mongoose.connection.on('open', _ => {
        console.log('conectao');
    })
}
Conectar()
mongoose.connection.on('close',_=>{
    console.log('desconectao');
})
export default Conectar;