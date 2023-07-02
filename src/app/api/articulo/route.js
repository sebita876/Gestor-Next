import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Herramienta from '@/bd/models/herramientas';


export async function GET(req, res) {
  await Conectar()
  const Herramientas = await Herramienta.find();
  return NextResponse.json({ status: 200, message: 'Herramientas', datos: Herramientas })
}

export async function POST(request) {
  try {
    const requesData = await request.json()
    const { nombre, cantidad, id, categoria } = requesData
    const nuevaHerramienta = new Herramienta({ nombre, cantidad, id, categoria });
    await nuevaHerramienta.save();
    console.log('Guardado exitosamente');
    return NextResponse.json({ status: 200, message: 'Guardado exitosamente', data: nuevaHerramienta })
  } catch (error) {
    console.error(error);
  }
}
export async function PUT(req) {
  try {
    await Conectar()
    const requesData = await req.json()
    let { id, nombre, categoria, cantidad, fecha } = requesData
    const _id = await Herramienta.find({ id: id })
    if (cantidad == "") {
      cantidad = _id.cantidad
    }
    if (nombre == "") {
      nombre = _id.nombre
    }
    if (categoria == "") {
      categoria = _id.categoria
    }
    if ((nombre != undefined && id != undefined) || (categoria != undefined && id != undefined) || (cantidad != undefined && id != undefined)) {
      const Update = await Herramienta.findByIdAndUpdate(_id[0]._id, { nombre: nombre, categoria: categoria, fecha: fecha, cantidad: cantidad }, { new: true })
      return NextResponse.json({ status: 200, message: 'Actualizado exitosamente', data: Update })
    } else {
      const Deleted = await Herramienta.findByIdAndDelete(_id[0]._id)
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