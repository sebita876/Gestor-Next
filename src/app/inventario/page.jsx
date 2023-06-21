'use client'
import { useEffect, useState } from "react"
import { Lista } from "@/components/lista";
import { Articulo } from "@/components/articulo";
import axios from "axios";
import { useParams} from 'next/navigation'
import { Resto } from "@/components/resto";

export default function Inventario (){
  useEffect(()=>{
    TraerArticulos()
    TraerCat()
  },[])
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  const [modalOpen2, setModalOpen2] = useState(false)
  const openModal2 = () => {
    setModalOpen2(true)
    setModalOpen4(false)
  }
  const closeModal2 = () => {
    setModalOpen2(false)
  }
  const [modalOpen3, setModalOpen3] = useState(false)
  const openModal3 = () => {
    setModalOpen3(true)
    setModalOpen4(false)
  }
  const closeModal3 = () => {
    setModalOpen3(false)
  }
  const [modalOpen4, setModalOpen4] = useState(false)
  const openModal4 = () => {
    setModalOpen4(!modalOpen4)
  }
  const closeModal4 = () => {
    setModalOpen4(false)
  }
  const [modalOpen5, setModalOpen5] = useState(false)
  const openModal5 = () => {
    setModalOpen5(true)
    setModalOpen4(false)
  }
  const closeModal5 = () => {
    setModalOpen5(false)
  }
//_______________________________________________ARTICULO_________________________________________________//
  let [listaArticulo,setListaArticulo]=useState([])
  const BorrarListaArticulos=()=>{ 
    const array=[]
    setListaArticulo(listaArticulo=array)
    console.log('este es el que borra')
    console.log(listaArticulo)
  }
  const AgregarArticulo=()=>{//_________________________Agregar Articulo__________________________//
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
  const GuardarArticulo = async (tipo,fecha,id,categoria) => {//___________________Guardar Articulo_______________//
    try{
      closeModal()
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
  const TraerArticulos = async ()=>{//_________________________Traer Articulo__________________________//
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
//_______________________________________________CATEGORIA_______________________________________________//
  let [listaCat,setListaCat]=useState([])
  const BorrarListaCat=()=>{ 
    const array=[]
    setListaCat(listaCat=array)
    console.log('este es el que borra')
    console.log(listaArticulo)
  }
  const AgregarCat=()=>{ //_________________________Agregar Categoria__________________________//
    closeModal2()
    const nombre = document.getElementById("nombre").value
    const newComponent=<Lista nombre={nombre}/>
    setListaCat([...listaCat,newComponent])
    guardarCat(nombre)
  }
  const guardarCat=async (nombre)=>{//_________________________Guardar Categoria__________________________//
    try{
      await axios.post('/api/categoria',{
        nombre:nombre
        }).then
        ( data => console.log('guardao'))
    }catch (error) {
      console.log(error)
    }};
  const TraerCat = async ()=>{//_________________________Traer Categorias__________________________//
    try{
      const categorias = await axios.get('/api/categoria').then( res =>{
        const lista=res.data.datos
        const newComponent = lista.map(dato=>(
          <Lista key={dato._id}nombre={dato.nombre}/>))
        setListaCat([...listaCat,newComponent])
      })
    }catch(error){
      console.log(error)
    }}
  const ActualizarCat = async () =>{//______________Actualizar Categoria___________//
    try{     
      closeModal5()
      const nombre = document.getElementById("nombre").value
      const actualizar = document.getElementById("nuevo").value
      console.log(nombre,actualizar)
      const CategoriaActualizar = await axios.put('/api/categoria', {
        nombre:nombre,
        actualizar:actualizar
      })
      BorrarListaCat()
      TraerCat()
    }catch(error){
      console.log(error)
    }}
  const BorrarCat = async ()=>{//------------------Borrar Categoria---------------------------------//
    closeModal3()
    try{
      const nombre = document.getElementById("borrar").value
      const response = await axios.put('/api/categoria', {
        nombre:nombre
      })
      BorrarListaCat()
      TraerCat()
    }catch(error){
      console.log(error)
    }}
//=====================================Return=======================================================//
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
              <button onClick={()=>{AgregarArticulo()}}>Cerrar</button>
            </div>
          </div>
      </div>
      )}
      {modalOpen2 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Nombre" id="nombre"/>
              <button onClick={AgregarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      {modalOpen5 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Actualizar" id="nombre"/>
              <input type="text" placeholder="Nuevo" id="nuevo"/>
              <button onClick={ActualizarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      {modalOpen3 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Nombre" id="borrar"/>
              <button onClick={BorrarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      <header className="header" >
        <div className="perfil"/>
        <div className="contenedor2">
          <div className="botoncabe1" onClick={openModal}/>
          <div className="botoncabe2"/>
          <div className="botoncabe3"/>
          <div className="botoncabe4"/>
        </div>
      </header>
    <div className="contenedor">
      <div className="izquierda" >
        <h1 className="h1">Categorias</h1>
        <ul>
          <li className="li" >Todos</li>
          {listaCat}
        </ul>
        <div className="medioizquierda">
          {modalOpen4 &&(
            <div className="desplegable">
              <li className="li2" onClick={openModal3}>Borrar Cat</li>
              <li className="li2" onClick={openModal5}>Editar Cat</li>
              <li className="li2" onClick={openModal2}>Añadir Cat</li>
              <button onClick={closeModal4}>Cerrar</button>
            </div>
            )}
            <div className="btn" onClick={openModal4}/>
          </div>
      </div>
      <Resto lista={listaArticulo}/>
    </div>
  </div>
    )
}
