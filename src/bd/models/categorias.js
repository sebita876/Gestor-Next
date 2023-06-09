import { Schema } from 'mongoose';
import { Model } from 'mongoose';
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true}
});

const Categoria = mongoose.models.Categoria || mongoose.model('Categoria', categoriaSchemaSchema);


module.exports = Categorias;