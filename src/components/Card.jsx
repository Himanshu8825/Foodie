import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const Cards = () => {
  return (
    <>
      <Card style={{ width: '18rem' }} className='m-4'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div classnameName="container">
         <select  className='bg-info h-100 rounded'>
          {Array.from(Array(6) , (e , i)=>{
            return(
              <option key = {i+1} value={i+1} > {i+1}</option>
            )
          })}
         </select>
         <select  className='bg-info h-100 rounded m-2'>
          <option value="half">Half</option>
          <option value="full">Full</option>
         </select>
         
         <div className='d-inline fs-5 h-100'>
          Total Price
         </div>
        <Button className='mb-3 bg-info'>Go somewhere</Button>
        </div>
      </Card.Body>
    </Card> 
    </>
  )
}

export default Cards
