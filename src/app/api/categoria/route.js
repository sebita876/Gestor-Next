import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Categoria from '@/bd/models/categorias';
import axios from 'axios';

export async function GET(req,res) {
  await Conectar()
  const Categorias = await Categoria.find(); 
  return NextResponse.json({status: 200, message:'Categorias', datos: Categorias})
}

export async function POST(request) {
  try {
    await Conectar()
    const requesData = await request.json()
    const nuevaCategoria= new Categoria( {nombre:requesData.nombre}  );
    await nuevaCategoria.save();
    console.log('Guardado exitosamente');
    return NextResponse.json({status: 200, message:'Guardado exitosamente', data: nuevaCategoria})
  } catch (error) {
    console.error(error);
  }
}
export async function PUT(request){
  try{
    await Conectar()
    const requesData = await request.json()
    const {nombre,actualizar}=requesData
    const id = await Categoria.find({nombre:nombre})
    console.log(id[0].nombre)
    const Update = await Categoria.findByIdAndUpdate(id[0]._id,{nombre:'ola'},{new:true})
    return NextResponse.json({status: 200, message:'Actualizado exitosamente', data: Update})
  }catch(error)
  {
    console.log(error)
  }
}
export async function handlers(req, res) {
  if (req.method === 'POST') {
    await POST(req, res);
  } else if (req.method === 'GET') {
    await GET(req, res);
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}