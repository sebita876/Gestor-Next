'use client'
import { useState } from 'react'
import * as Validaciones from './validar'
export default function Login() {
    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    const guardarUsuario = () => {
        
        const opcion = document.querySelector('input[name="opcion"]:checked')
        const id = opcion.id
        const admin = document.getElementById(id).value
        if (opcion && opcion.value === "true") {
            setModalOpen(true)
        } else {
            const validar = Validaciones.validarUsuario(closeModal)
        }
    }
    return (
        <div>
            <div className='fondo' />

            <div className='fotoAdox' />
            {modalOpen && (
                <div className="contenedor3">
                    <div className="modal-overlay">
                        <h1 id='H2 hidden' hidden={false}>Ingrese el nombre del admin</h1>
                        <h1 id='HI hidden' hidden={true}>Admin no encontrado</h1>
                        <div className="close-button" onClick={() => closeModal()} />
                        <input type="number" id='dniAdmin' placeholder='DNI' onInput={(e) => {
                            if (e.target.value.length > 8) {
                                e.target.value = e.target.value.slice(0, 8);
                            }
                        }} />
                        <input type="text" id='contraseñaAdmin' placeholder='Contaseña' />
                        <button onClick={() => { Validaciones.verificarAdmin(closeModal) }}>cerrar</button>
                    </div>
                </div>)}
            <div className='login'>

                <div className='container'>

                    <div>
                        <h1 id="H1hidden" hidden={true}>Usuario Invalido</h1>
                        <h1 id="H2hidden" hidden={true}>Guardado Correctamente</h1>
                        <input type="number" placeholder="DNI" className='inputTextRegister' id='DNI' onInput={(e) => {
                            if (e.target.value.length > 8) {
                                e.target.value = e.target.value.slice(0, 8);
                            }
                        }} />
                        <input type="text" placeholder="Contraseña" className='inputTextRegister' id='contraseña' />
                        <input type="text" placeholder="Repetir Contaseña" className='inputTextRegister' id='RepContraseña' />
                        <h1>Admin</h1>
                    </div>
                    <div className='containerCheck'>
                        <input type="radio" id="AdminTrue" name="opcion" value={true} />
                        <label for="AdminTrue">Si</label>
                        <input type="radio" id="AdminFalse" name="opcion" value={false} />
                        <label for="AdminFalse">No</label>
                    </div>
                    <input type="submit" value="Registrarse" className='sumbmit' onClick={() => { guardarUsuario() }} />
                </div>
            </div>
        </div>
    );
}