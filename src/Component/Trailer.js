import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from './Movies';
const Trailer = () => {
    const {ID}=useParams()
        const filmid = movies.find((e)=>e.id == ID )
    console.log('movie',movies)
    console.log('film',filmid)
    console.log('id',ID)
  return (
    <div className='trailer'>
    <h2>{filmid.name} </h2>
    <h2>{filmid.rate} </h2>
    <h2>{filmid.date} </h2>
    <h2>{filmid.type} </h2>
    <img variant="top" src={filmid.image} />

    </div>
  )
}

export default Trailer
