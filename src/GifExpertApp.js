import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch Man']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            <ol>
                { //El map me sirve para transformar cada uno de los elementos que estan dentro del arreglo
                    categorias.map ( category => (
                        <GifGrid 
                            key= {category}
                            category= {category} />
                            ))//<li key={category}> {category}</li>)
                }
            </ol>
        </>
    )
}

