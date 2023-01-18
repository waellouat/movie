import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rate from './Rate';
import Button from 'react-bootstrap/Button';

const MovieCard = ({movie}) => {
  return (
    <div className='cardcountenier'>
      
      <Card style= {{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
    
        <Card.Title>{movie.name} </Card.Title>
        <Card.Text>
        {movie.date}
        </Card.Text>
        <Card.Title>{movie.type} </Card.Title>
        <Card.Title>{movie.description} </Card.Title>

       <Rate rate={movie.rate} />
       <Link to={`/trailer/${movie.id}`} ><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
      
    </Card>
    </div>
  )
}

export default MovieCard
