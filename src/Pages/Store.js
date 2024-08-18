import React from 'react'
import { useOutletContext } from 'react-router-dom'
// import CartComponent from '../Components/CartComponent'
import Body from '../Components/Body'
import CartComponent from '../Components/CartComponent'
// import Body1 from '../Components/Body1'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
function Store() {
  const outLetCtx = useOutletContext()
  console.log(outLetCtx)
  return (
    <div>
      <CartComponent show={outLetCtx.show} onClose={outLetCtx.onClose} />
      <Body  
      indianFoods={outLetCtx.indianFoods} 
      italianFoods={outLetCtx.italianFoods} 
      chineseFoods={outLetCtx.chineseFoods} 
      onShow={outLetCtx.onShow} />
      

    </div>
  )
}

export default Store


    