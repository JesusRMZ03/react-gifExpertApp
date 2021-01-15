import React from 'react'; //{ useState, useEffect }
import { useFetchGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './components/GifGridItem';
// import { getGifs } from './helpers/getGifs';

export const GifGrid = ({category})=>{
	// const [images, setimages] = useState([]);
	const {data:images,loading}= useFetchGifs(category);


    // useEffect( ()=> {
    //     getGifs( category)
    //         .then (setimages);
    // }, [category])


    return(
    <>
			<h3 className = 'animate__animated animate__backInDown'>{category}</h3>
			{/* Es el titulo que aparece tras buscar */}
			{loading && <p className= 'animate__animated animate__flash'>Loading</p>}
			{
				!loading && (
					<div className="card-grid">
					{
						images.map( img => (
							<GifGridItem
								key={img.id}
								{...img}
							/>
						))
											}
							</div>
					)
			}
    </>
  );
};