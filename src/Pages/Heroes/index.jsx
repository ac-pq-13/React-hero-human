import React, {useState} from 'react'

const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'
const SEARCH = '/search'
const Heroes = () => {
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [fullname, setFullname] = useState("")
    const [estatura, setEstatura] = useState("")
    const [trabajo, setTrabajo] = useState("")
    const [img, setImg] = useState("https://www.pngkey.com/png/full/21-213224_unknown-person-icon-png-download.png")
    const Hero = async () => {

        try {
          const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}${SEARCH}/${nombre}`)          
          const hero = await response.json()
          setFullname(hero.results[0].biography["full-name"])
          setTrabajo(hero.results[0].work.occupation)
          setEstatura(hero.results[0].appearance.height[1])
          setImg(hero.results[0].image.url)     
          setId(hero.results[0].id)     
        } catch (error) {
          console.log('error', error)
        }
      }
    const search = (e) => {
        const { target : { value } } = e
        console.log(value)
        setNombre(value)
    }  
    return (
        <div className="h_hero_wrapper">
            <div className="hero_input">
                <input className="input" type="text" onChange={search} placeholder="Ingrese el nombre"/>
                <button className="button" onClick={Hero} >Buscar</button>
            </div>
            <div className="hero_card">
                <ul>
                        <li>ID: {id}</li>
                        <li>Nombre real: {fullname}</li>
                        <li>Estatura : {estatura} </li>
                        <li>Ocupacion: {trabajo } </li>        
                </ul> 
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Heroes

 