import React, { useEffect, useState } from 'react'
const Humans = () => {
    const [persona, setPersona] = useState([])
    const informacionAPI = async () =>{
        try{
            const api = await fetch('https://randomuser.me/api')
            const info = await api.json()
            setPersona(info.results)
        }catch(error){
            console.log('error')
        }
    }
    useEffect(() => {
       informacionAPI()},[]);
    
    return (
        <>
            {persona.map((data)=>{
                return(
                    <div key={data.id.value} className='h_human_wrapper'>
                    <ul>
                        <li>Nombre: {data.name.title} {data.name.first} {data.name.last}</li>
                        <li>Género: {data.gender}</li>
                        <li>Usuario: {data.login.username}</li>
                        <li>Correo: {data.email}</li>
                        <li>Contraseña: {data.login.password}</li>
                    </ul>
                    <img src={data.picture.large} alt="" />
                   </div> 
                )
            })}
        </>
        
    )
}
export default Humans
