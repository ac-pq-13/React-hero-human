import React, { useEffect, useState } from 'react'
const Humans = () => {
    const [nombre, setNombre] = useState("")
    const [foto, setFoto] = useState("")
    const [edad, setEdad] = useState("")
    const [correo, setCorreo] = useState("")
    const [constrasena, setContrasena] = useState("")
    const [usuario, setUsuario] = useState("initialState")
    const informacionAPI = async () =>{
        try{
            const api = await fetch('https://randomuser.me/api')
            const info = await api.json()
            setCorreo(info.results[0].email)
            setEdad(info.results[0].dob.age)
            setNombre(info.results[0].name)
            setFoto(info.results[0].picture.large)
            setContrasena(info.results[0].login.password)
            setUsuario(info.results[0].login.username)
        }catch(error){
            console.log('error')
        }
    }

    useEffect(() => {
       informacionAPI()},[]);
    
    return (
        <div className='h_human_wrapper'>
            <ul>
                 <li>Nombre: {nombre.title}. {nombre.first} {nombre.last}</li>            
                 <li>Correo: {correo}</li>
                 <li>Edad: {edad}</li>
                 <li>Usuario: {usuario}</li>
                 <li>Contraseña: {constrasena}</li>
                 
            </ul>
            <img src={foto} alt="" />
         
        </div>
    )
}
export default Humans
