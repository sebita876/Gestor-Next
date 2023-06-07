import mongoose from 'mongoose';

const herramientasSchema = new mongoose.Schema({
  categoria: {
    type: String,
    require:true
  }
  
});
const Herramienta = mongoose.models.Herramienta || mongoose.model('Herramienta', herramientasSchema);

export default Herramienta;
