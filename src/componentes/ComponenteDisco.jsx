import React, {useState, useEffect} from 'react'
import { listaDiscos } from '../servicios/DiscoServicio';
const ComponenteDisco = () => {
    /*const dummyData = [
        {
            "id": 1,
            "artista": "artista",
            "titulo": "el mejor disco",
            "duracion": 100,
            "cod": "abc123"
        },
        {
            "id": 2,
            "artista": "artista",
            "titulo": "no tan bueno",
            "duracion": 222,
            "cod": "bca123"
        },
        {
            "id": 3,
            "artista": "artista",
            "titulo": "masomenos bueno",
            "duracion": 38,
            "cod": "aaa123"
        },
        {
            "id": 4,
            "artista": "artista",
            "titulo": "es regular",
            "duracion": 46,
            "cod": "abc321"
        },
        {
            "id": 5,
            "artista": "artista",
            "titulo": "es bueno",
            "duracion": 59,
            "cod": "bca231"
        },
        {
            "id": 6,
            "artista": "artista",
            "titulo": "es pasable",
            "duracion": 65,
            "cod": "aac212"
        }
    ]*/

    const [disco, setDisco]= useState([]);

    useEffect(() => {
        listaDiscos().then((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

  return (
    <div>
        <table className='table-auto'>
            <tHead>
                <tr>
                    <th>Id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Codigo</th>
                </tr>

            </tHead>
            <tbody>
                {
                    disco.map(disco => 
                        <tr key={disco.id}>
                            <td>{disco.id}</td>
                            <td>{disco.artista}</td>
                            <td>{disco.titulo}</td>
                            <td>{disco.duracion}</td>
                            <td>{disco.cod}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
export default ComponenteDisco