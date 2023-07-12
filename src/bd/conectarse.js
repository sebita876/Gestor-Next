import mongoose from "mongoose";
function Conectar() {
    mongoose.connect('mongodb+srv://adoxpasantes:ABR7EDitFe1EXkDq@cluster0.um2zx.mongodb.net/p_administration');
    mongoose.connection.on('open', _ => {
        console.log('conectao');
    })
}
export default Conectar;