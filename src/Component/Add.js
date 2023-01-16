import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
    
import Form from 'react-bootstrap/Form'

export default function Add({addhandler}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [type,setType]=useState("");
const [date,setDate]=useState("");
const [rate,setRate]=useState("");
const [image,setImage]=useState("");
const addMovie=()=>{
  addhandler({id:Math.random(),name,description,type,date,rate ,image})
  handleClose()
}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       add new movie 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> movie name </Form.Label>
        <Form.Control type="text" placeholder="Enter the title of the movie" value={name} onChange={(e)=>setName(e.target.value)}  />
        <Form.Label> movie description </Form.Label>
        <Form.Control type="text" placeholder="Enter the description of the movie" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <Form.Label>date</Form.Label>
        <Form.Control type="text" placeholder="Enter  the date of the movie"  value={date} onChange={(e)=>setDate(e.target.value)}/>
        <Form.Label> movie rate </Form.Label>
        <Form.Control type="text" placeholder="Enter the rate of the movie" value={rate}onChange={(e)=>setRate(e.target.value)}/>
        <Form.Label> movie type </Form.Label>
        <Form.Control type="text" placeholder="Enter the type of the movie" value={type} onChange={(e)=>setType(e.target.value)} />
        <Form.Label> movie url </Form.Label>
        <Form.Control type="text" placeholder="Enter the url of the movie"  value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

