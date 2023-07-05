import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Usuarios from '@/bd/models/usuarios';

export async function GET(req, res) {
    await Conectar()
    const Usuarioss = await Usuarios.find();
    return NextResponse.json({ status: 200, message: 'Usuarios', datos: Usuarioss })
}

export async function POST(req) {
    try {
        await Conectar()
        const requesData = await req.json()
        const nuevoUsuario = new Usuarios({ dni: requesData.dni, contraseña: requesData.contraseña, admin: requesData.admin });
        await nuevoUsuario.save();
        return NextResponse.json({ status: 200, message: 'Guardado exitosamente', data: nuevoUsuario })
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