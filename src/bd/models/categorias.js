import { Schema } from 'mongoose';
import { Model } from 'mongoose';
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true}
});

const Categorias = model('Categorias',categoriasSchema);

module.exports = Categorias;