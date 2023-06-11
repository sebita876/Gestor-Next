import { NextResponse } from 'next/server';
import Conectar from '@/bd/conectarse';
import Categoria from '@/bd/models/categorias';
import axios from 'axios';

export async function GET(req,res) {
  await Conectar()
  const data = req.json()
  const Categorias = await Categoria.find({nombre:'sebita'});
  console.log(Categorias) 
  return NextResponse.json({status: 200, message:'Categorias', datos: Categorias})
}

