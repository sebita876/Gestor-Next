import mongoose from 'mongoose';

const herramientasSchema = new mongoose.Schema({
  tipo:{
    type: String,
    require:true
  },
  fecha:{
    type: Number,
    require:true
  },
  id:{
    type: Number,
    require:true
  },
  categoria: {
    type: String,
    require:true
  }
});
const Herramienta = mongoose.models.Herramienta || mongoose.model('Herramienta', herramientasSchema);

export default Herramienta;
