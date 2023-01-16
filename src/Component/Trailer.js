import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from './Movies';
const Trailer = () => {
    const {ID}=useParams()
        const film=movies.find((e)=>e.id=== ID)
    
  return (
    <div>
     <h2>{film.name} </h2>
    </div>
  )
}

export default Trailer
