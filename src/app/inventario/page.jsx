'use client'
import { useEffect, useState } from "react"
import { Lista } from "@/components/lista";
import { Articulo } from "@/components/articulo";
import axios from "axios";

export default function Inventario (){
  useEffect(()=>{
    TraerArticulos()
  },[])
  const [modalOpen, setModalOpen] = useState(false)
  let [listaArticulo,setListaArticulo]=useState([])
  const BorrarListaArticulos=()=>{
    const array=[]
    setListaArticulo(listaArticulo=array)
    console.log('este es el que borra')
    console.log(listaArticulo)
  }
  const [listaCat,setListaCat]=useState([])
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  const AgregarArticulo=()=>{
    const tipo = document.getElementById("tipo").value
    const fecha= document.getElementById("fecha").value
    const id = document.getElementById("id").value
    const categoria= document.getElementById("categoria").value
    const newComponent = <Articulo
      tipo={tipo}
      fecha={fecha} 
      id={id} 
      categoria={categoria}/>
    setListaArticulo([...listaArticulo,newComponent])
    GuardarArticulo(tipo,fecha,id,categoria);
    closeModal()
  }
  const GuardarArticulo = async (tipo,fecha,id,categoria) => {
    try{
      await axios.post('/api/articulo',{
        tipo:tipo,
        fecha:fecha,
        id:id,
        categoria:categoria
        })
        .then( data => console.log('guardao'))
    }catch (error) {
      console.log(error)
    }};
  const TraerArticulos = async ()=>{
    try{
      const herramientas = await axios.get('/api/articulo').then( res =>{
        const lista=res.data.datos
        console.log(listaArticulo)
        const newComponent = lista.map(dato=>(
          <Articulo key={dato._id}tipo={dato.tipo}fecha={dato.fecha}id={dato.id}categoria={dato.categoria}/>))
        setListaArticulo([...listaArticulo,newComponent])
      })
    }catch(error){
      console.log(error)
    }}
  const AgregarCat=()=>{
    const newComponent=<Lista valor={prompt("ingrese el valor")}></Lista>
    setListaCat([...listaCat,newComponent])
  }
  return (
    <div className="fondo3">
      {modalOpen && (
              <div className="contenedor3">
                <div className="modal-overlay">
                  <div className="modal-content">
                    <input type="text" placeholder="Tipo" id="tipo"/>
                    <input type="text" placeholder="Fecha" id="fecha"/>
                    <input type="text" placeholder="Id"id="id"/>
                    <input type="text" placeholder="Categoria" id="categoria"/>
                    <button onClick={AgregarArticulo}>Cerrar</button>
                  </div>
                </div>
              </div>)}
      <header className="header" >
        <div className="perfil"/>
        <div className="contenedor2">
          <div className="botoncabe1" onClick={openModal}/>
          <div className="botoncabe1" onClick={AgregarArticulo}/>
          <button onClick={()=>{GuardarArticulo();}}>EXAMPLE</button>
          <div className="botoncabe2" />
          <div className="botoncabe3"/>
          <div className="botoncabe4"/>
        </div>
      </header>
      <div className="contenedor">
        <div className="izquierda" >
          <h1 className="h1">Categorias</h1>
          <ul>
            <li className="li">Todos</li>
              {listaCat}
          </ul>
        </div>
        <div className="resto">
          <table>
              <tbody>
                {listaArticulo}
              </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}