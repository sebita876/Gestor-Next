import mongoose from "mongoose";
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        require: true
    }
});

const Categoria = mongoose.models.Categoria || mongoose.model('Categoria', categoriaSchema);



export default Categoria;