import React from 'react'
import MovieCard from './MovieCard'

const MovieListe = ({movieListe,search,rate}) => {
  return (
    
         <div className='movieliste'>
          {
            movieListe.filter(el => el.name.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=rate )
            .map((el,key)=><MovieCard key={el.id} movie={el} />)
          }
         </div>
         
   
  )
}

export default MovieListe
