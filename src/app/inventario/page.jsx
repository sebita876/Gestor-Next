'use client'
import { useEffect, useState } from "react"
import { Lista } from "@/components/lista";
import { Articulo } from "@/components/articulo";
import { useRef } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./loading";

export default function Inventario (){
  const [mostarLista, setMostarList]=useState(false)
  const [articulos, setArticulos]= useState([])
  const [isLoading, setIsLoading] = useState(true);  
  let [listaArticulo,setListaArticulo]=useState([])
  const [busqueda, setBusqueda]= useState("")
  const[select, setSelect]=useState([])
  let [listaCat,setListaCat]=useState([])
  let listaArtBien
  useEffect(()=>{
    const init = async () =>{
    await TraerArticulos()
    }
    init()
  },[])
  useEffect(()=>{
    const init = async () =>{
    if(listaArticulo.length !== 0){
      BorrarListaCat()
      await TraerCat()
    }
    }
    init()
  },[listaArticulo])
  useEffect(()=>{
    listaCatBien=listaCat
  },[listaCat])
  useEffect(() => {
    console.log(listaArticulo, "useEffect")
   }, [articulos,listaArticulo]);
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true)
    console.log(listaCatBien)
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
  const [modalOpen6, setModalOpen6] = useState(false)
  const openModal6 = () => {
    setModalOpen6(true)
  }
  const closeModal6 = () => {
    setModalOpen6(false)
  }
  const [modalOpen7, setModalOpen7] = useState(false)
  const openModal7 = () => {
    setModalOpen7(true)
  }
  const closeModal7 = () => {
    setModalOpen7(false)
  }
  const [modalOpen8, setModalOpen8] = useState(false)
  const openModal8 = () => {
    setModalOpen8(true)
  }
  const closeModal8 = () => {
    setModalOpen8(false)
  }
//_______________________________________________ARTICULO_________________________________________________//
  const BorrarListaArticulo=()=>{ 
    const array=[]
    setListaArticulo(listaArticulo=array)
  }
  const funcion =()=> {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return today.toLocaleDateString();
  }
  const AgregarArticulo=()=>{//_________________________Agregar Articulo__________________________//
    let id
    const length = listaArticulo.length
      if (length == 0){
        id =1
      }
      else{
        const resta = listaArticulo.length - 1
        const objeto = listaArticulo[resta]
        const props = objeto.props.id
        id = props + 1
      }
    const nombre = document.getElementById("nombre").value
    const categoria= document.getElementById("categoria").value
    const cantidad= document.getElementById("cantidad").value
    const newComponent = <Articulo
    fecha={funcion()}
      nombre={nombre}
      id={id} 
      categoria={categoria}
      cantidad={cantidad}
      />
    setListaArticulo([...listaArticulo,newComponent])
    GuardarArticulo(nombre,id,categoria,cantidad);
    closeModal()
  }
  const GuardarArticulo = async (nombre,id,categoria,cantidad) => {//___________________Guardar Articulo_______________//
    try{
      closeModal()
      await axios.post('/api/articulo',{
        nombre:nombre,
        id:id,
        categoria:categoria,
        cantidad:cantidad
        })
        .then( data => console.log('guardao'))
    }catch (error) {
      console.log(error)
    }};
  const TraerArticulos = async ()=>{//_________________________Traer Articulo__________________________//
    try{
      const herramientas = await axios.get('/api/articulo').then( res =>{
        const lista=res.data.datos
        setArticulos(res.data.datos)
        const newComponent = lista.map(dato=>(
          <Articulo key={dato._id}nombre={dato.nombre}fecha={dato.fecha}id={dato.id}categoria={dato.categoria}cantidad={dato.cantidad}/>))
        setListaArticulo([...listaArticulo,...newComponent])
      })
    }catch(error){
      console.log(error)
      setIsLoading(false);
    }}
    const SeleccionarArticulo = () =>{
      const resultado = articulos.find(element => element.nombre === document.getElementById("select").value )
      document.getElementById("inputnombre").value = resultado.nombre 
      document.getElementById("inputcantidad").type=Number  
      document.getElementById("inputcantidad").value=resultado.cantidad
      document.getElementById("inputid").value=resultado.id
      
    }
    const ActualizarArticulo = async ()=>{
      try{     
        const nombre = document.getElementById("inputnombre").value
        const categoria = document.getElementById("inputcategoria").value
        const cantidad = document.getElementById("inputcantidad").value
        const id = document.getElementById("inputid").value
        closeModal6()
        const CategoriaActualizar = await axios.put('/api/articulo', {
          id:id,
          nombre:nombre,
          categoria:categoria,
          cantidad:cantidad,
          fecha:funcion()
        })
        BorrarListaArticulo()
        TraerArticulos()
      }catch(error){
        console.log(error)
      }
    }
      const BorrarArticulo = async ()=>{//------------------Borrar Articulos---------------------------------//
        closeModal7()
        try{
          const id = document.getElementById("borrar").value
          const response = await axios.put('/api/articulo', {
            id:id
          })

          BorrarListaArticulo()
          TraerArticulos()
        }catch(error){
          console.log(error)
        }}   
//_______________________________________________CATEGORIA_______________________________________________//
  let listaCatBien
  const BorrarListaCat=()=>{ 
    const array=[]
    setListaCat(listaCat=array)
    console.log(listaArticulo)
  }
  const [artFiltrado,setArtFiltrado]=useState([])
  const filtrarCat=(nombre,state)=>{
    console.log("entro")
    console.log(nombre)
    console.log(state)
    const filtrado = listaArticulo.filter(elemento => elemento.props.categoria === nombre)
    setArtFiltrado[filtrado]
    setMostarList[true]
  }
  const AgregarCat=()=>{ //_________________________Agregar Categoria__________________________//
    closeModal2()
    const nombre = document.getElementById("nombre").value
    let id =1
    const newComponent=<Lista nombre={nombre} id={id} funcion={filtrarCat} state={listaArticulo}/>
    setListaCat([...listaCat,newComponent])
    guardarCat(nombre,id)
  }
  const guardarCat=async (nombre,id)=>{//_________________________Guardar Categoria__________________________//
    try{
      await axios.post('/api/categoria',{
        id:id,
        nombre:nombre
        }).then
        ( data => console.log('guardao'))
    }catch (error) {
      console.log(error)
    }};
  const TraerCat = async ()=>{//_________________________Traer Categorias__________________________//
    try{
      let nombre
      console.log(listaArticulo,"traerCat ListaArticulo")
      const categorias = await axios.get('/api/categoria').then( res =>{
        const lista=res.data.datos
        const newComponent = lista.map(dato=>(
          <Lista key={dato._id}nombre={dato.nombre} funcion={filtrarCat} state={listaArticulo}/>))
        setListaCat([...listaCat,...newComponent])
        console.log("Ya creo cat")
        setIsLoading(false);
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
  const inputRef = useRef(null)
  const apretarTecla = (event)=>{
    if(event.keyCode ===13)
    {
      inputRef.current.blur()
    }
  }
  const cambios=e=>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }
  const filtrar=(params)=>{
    var resultado=articulos.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().includes(params.toLowerCase())){
        return (elemento.nombre)
      }
    })
    setSelect(resultado)
  }
//=====================================Return=======================================================//
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
    
    <div className="fondo3">
      {modalOpen && (
        <div className="contenedor3">
          <div className="modal-overlay">
              <input type="text" placeholder="Nombre" id="nombre" className="inputt"/>
              <input type="text" placeholder="Id"id="id" className="inputt"/>
              <select name="" id="categoria">
                {listaCat.map((elemento)=>(
                   <option key={elemento.props.nombre} value={elemento.props.nombre}>
                      {elemento.props.nombre}
                    </option>
                ))}
              </select>
              <input type="text" placeholder="Cantidad" id="cantidad" className="inputt"/>
              <button onClick={()=>{AgregarArticulo()}}>Cerrar</button>
          </div>
      </div>
      )}
      {modalOpen6 && (
        <div className="contenedor3">
          <div className="modal-overlay">
              <h1 className="h1">Ingrese el nombre</h1>
              <input 
              type="search" 
              className="inputt" 
              placeholder="Nombre" 
              onChange={cambios} 
              onBlur={SeleccionarArticulo} 
              onKeyDown={apretarTecla}
              ref={inputRef}
              value={busqueda}/>
              <select name="" id="select">
                {select.map((elemento)=>
                  <option key={elemento.id} value={elemento.nombre}>{elemento.nombre}</option>
                )}
              </select>
              <button onClick={()=>{SeleccionarArticulo()}}>Buscar</button>
          <input type="number" id="inputid" hidden={true}  defaultValue={"0"}/>
          <input type="text" id="inputnombre" className="inputt"  defaultValue={"nombre"} />
          <select name="" id="inputcategoria">
                {listaCatBien.map((elemento)=>{
                  return <option key={elemento.props.nombre} value={elemento.props.nombre}>{elemento.props.nombre}</option>
                }
                )}
              </select>
          <input type="text" id="inputcantidad" className="inputt" defaultValue={"cantidad"}/>
          <button onClick={ActualizarArticulo}>Buscar</button>
          </div>
      </div>
      )}
      {modalOpen8 && (
        <div className="contenedor3">
          <div className="modal-overlay">
              <button onClick={()=>{setMostarCampos(true)}}>Cerrar</button>
            </div>
          </div>
              )}
      {modalOpen2 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Nombre" id="nombre" className="inputt"/>
              <button onClick={AgregarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      {modalOpen5 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Actualizar" id="nombre" className="inputt"/>
              <input type="text" placeholder="Nuevo" id="nuevo" className="inputt"/>
              <button onClick={ActualizarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      {modalOpen3 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="Nombre" id="borrar" className="inputt"/>
              <button onClick={BorrarCat}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
       {modalOpen7 && (
        <div className="contenedor3">
          <div className="modal-overlay">
            <div className="modal-content">
              <input type="text" placeholder="ID" id="borrar" className="inputt"/>
              <button onClick={BorrarArticulo}>Cerrar</button>
            </div>
          </div>
        </div>
       )}
      <header className="header" >
        <div className="perfil"/>
        <div className="contenedor2">
          <div className="botoncabe1" onClick={openModal}/>
          <div className="botoncabe2" onClick={openModal7}/>
          <div className="botoncabe3" onClick={openModal6}/>
        </div>
      </header>
    <div className="contenedor">
      <div className="izquierda" >
        <button onClick={()=>filtrarCat("dsds")}>example</button>
        <h1 className="h1">Categorias</h1>
        <ul>
          <li className="li" >Todos</li>
          {listaCat}
        </ul>
        <div className="medioizquierda">
          {modalOpen4 &&(
            <div className={`desplegable ${modalOpen4 ? 'visible' : ''}`}>
              <li className="li2" onClick={openModal3}>Borrar Cat</li>
              <li className="li2" onClick={openModal5}>Editar Cat</li>
              <li className="li2" onClick={openModal2}>Añadir Cat</li>
              <button onClick={closeModal4}>Cerrar</button>
            </div>
            )}
            <div className="btn" onClick={openModal4}/>
          </div>
      </div>
      <div className="resto" id="infiniteScroll">
        <InfiniteScroll dataLength={listaArticulo.length} hasMore={true}scrollableTarget="infiniteScroll">
            <table>
                <tbody>
                  <tr>
                      <td className="lista">Nombre</td>
                      <td className="lista">Fecha</td>
                      <td className="lista">ID</td>
                      <td className="lista">Categoria</td>
                      <td className="lista">Cantidad</td>
                  </tr>
                  {!mostarLista && listaArticulo}
                  {mostarLista && artFiltrado}
                </tbody>
            </table>
        </InfiniteScroll>   
    </div>  
    </div>
  </div>
      )}
    </div>)
}
