import React from 'react'
import Rate from './Rate'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Filter = ({setSearch,setRate,rate}) => {
  
  return (
    <div className='filtercounter'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
        <Form.Control
          placeholder="search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>setSearch(e.target.value)} 
        
        />
      </InputGroup>
      <Rate rate={rate} setRate={setRate} />
    </div>
  )
}

export default Filter
