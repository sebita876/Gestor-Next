import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Categoria from '@/bd/models/categorias';
import axios from 'axios';


export async function GET(req, res) {
  await Conectar()
  const Categorias = await Categoria.find();
  return NextResponse.json({ status: 200, message: 'Categorias', datos: Categorias })
}

export async function POST(req) {
  try {
    await Conectar()
    const requesData = await req.json()
    const nuevaCategoria = new Categoria({ nombre: requesData.nombre, id: requesData.id });
    await nuevaCategoria.save();
    console.log('Guardado exitosamente');
    return NextResponse.json({ status: 200, message: 'Guardado exitosamente', data: nuevaCategoria })
  } catch (error) {
    console.error(error);
  }
}
export async function PUT(req) {
  try {
    await Conectar()
    const requesData = await req.json()
    const { nombre, actualizar } = requesData
    const id = await Categoria.find({ nombre: nombre })
    if (actualizar != undefined) {
      const Update = await Categoria.findByIdAndUpdate(id[0]._id, { nombre: actualizar }, { new: true })
      return NextResponse.json({ status: 200, message: 'Actualizado exitosamente', data: Update })
    } else {
      const Deleted = await Categoria.findByIdAndDelete(id[0]._id)
      return NextResponse.json({ status: 200, message: 'Eliminado exitosamente', data: Deleted })
    }
  } catch (error) {
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