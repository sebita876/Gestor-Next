import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Categoria from '@/bd/models/categorias';

export async function GET(req,res) {
  await Conectar()
  const Categorias = await Categoria.find();
  return NextResponse.json({status: 200, message:'Categorias', datos: Categorias})
}

export async function POST(request) {
  try {
    await Conectar()
    const requesData = await request.json()
    const { nombre } = requesData
    const nuevaCategoria= new Categoria({ nombre  });
    await nuevaCategoria.save();
    console.log('Guardado exitosamente');
    return NextResponse.json({status: 200, message:'Guardado exitosamente', data: nuevaCategoria})
  } catch (error) {
    console.error(error);
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