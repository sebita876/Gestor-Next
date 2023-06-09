import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Herramienta from '@/bd/models/herramientas';

export async function GET(req,res) {
  await Conectar()
  const Herramientas = await Herramienta.find();
  return NextResponse.json({status: 200, message:'Herramientas', datos: Herramientas})
}

export async function POST(request) {
  try {
    const requesData = await request.json()
    const { tipo,fecha,id,categoria } = requesData
    console.log(tipo,fecha)
    const nuevaHerramienta = new Herramienta({ tipo,fecha,id,categoria  });
    console.log(nuevaHerramienta)
    await nuevaHerramienta.save();
    console.log('Guardado exitosamente');
    return NextResponse.json({status: 200, message:'Guardado exitosamente', data: nuevaHerramienta})
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