import { Schema } from 'mongoose';
import { Model } from 'mongoose';
const usuariosSchema = new mongoose.Schema({
    DNI: {
        type: Number,
        required: true
    },

    usuario: {
        type: String,
        required: true
    },

    contraseña: {
        type: String,
        required: true
    }
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;