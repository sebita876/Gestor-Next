import mongoose from 'mongoose';

const herramientasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  fecha: {
    type: String,
    require: true,
    default: function () {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return today.toLocaleDateString();
    }
  },
  id: {
    type: Number,
    require: true
  },
  categoria: {
    type: String,
    require: true
  },
  cantidad: {
    type: Number,
    require: true
  }
});
const Herramienta = mongoose.models.Herramienta || mongoose.model('Herramienta', herramientasSchema);

export default Herramienta;
