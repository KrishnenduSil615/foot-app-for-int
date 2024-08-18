import { Button, Card } from 'react-bootstrap'
// import Footer from './Footer';
import React, { useContext } from 'react';
import CartCntext from '../Store/CartContext';

function Body(props) {
  const cartCtx = useContext(CartCntext)
  // console.log(props.productsArr)
  // console.log(props.indianFoods)
  return (
    <>
      <div className='container '>
        <div className="row d-flex justify-content-center">
          <h2 className=" text-center mb-5" style={{ color: '#333', letterSpacing: '1px', fontSize: '3rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            Indian Food Items
            </h2><hr/>
            {props.indianFoods.map((product, index) => {
              const newProduct = { id: `${index + 1}`, ...product, quantity: 1 }
              return (
                <div key={Math.random()} className=" col-md-3 d-flex justify-content-center">
                  <Card className="container text-center shadow-lg border-0 rounded-4" style={{ width: '18rem', border: 0 }}>
                    <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>{product.title}</Card.Header>
                    <div style={{ overflow: "hidden" }}>
                      <Card.Img alt={product.name}
                        className="img-fluid rounded-0"
                        style={{ transition: 'transform 0.5s ease', height: '200px', objectFit: 'cover', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                        variant="top" src={product.imageUrl} />
                    </div>
                    <Card.Body className='d-flex justify-content-between'>
                      <p>Price:₹{product.price}</p>
                      <Button variant="primary" onClick={cartCtx.addItem.bind(null, newProduct)}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
        </div><hr/>
          
        <div className="row d-flex justify-content-center">
          <h2 className=" text-center mb-5" style={{ color: '#333', letterSpacing: '2px', fontSize: '3rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          Italian Food Items
            </h2><hr/>
            {props.italianFoods.map((product, index) => {
              const newProduct = { id: `${index + 1}`, ...product, quantity: 1 }
              
              return (
                <div key={Math.random()} className=" col-md-3 d-flex justify-content-center">
                  <Card className="container text-center shadow-lg border-0 rounded-4" style={{ width: '18rem', border: 0 }}>
                    <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>{product.title}</Card.Header>
                    <div style={{ overflow: "hidden" }}>
                      <Card.Img alt={product.name}
                        className="img-fluid rounded-0"
                        style={{ transition: 'transform 0.5s ease', height: '200px', objectFit: 'cover', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                        variant="top" src={product.imageUrl} />
                    </div>
                    <Card.Body className='d-flex justify-content-between'>
                      <p>₹{product.price}</p>
                      <Button variant="primary" onClick={cartCtx.addItem.bind(null, newProduct)}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
        </div><hr />

        <div className="row d-flex justify-content-center">
          <h2 className=" text-center mb-5" style={{ color: '#333', letterSpacing: '2px', fontSize: '3rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          Chinese Food Items
            </h2><hr/>
            {props.chineseFoods.map((product, index) => {
              const newProduct = { id: `${index + 1}`, ...product, quantity: 1 }
              return (
                <div key={Math.random()} className=" col-md-3 d-flex justify-content-center">
                  <Card className="container text-center shadow-lg border-0 rounded-4" style={{ width: '18rem', border: 0 }}>
                    <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>{product.title}</Card.Header>
                    <div style={{ overflow: "hidden" }}>
                      <Card.Img alt={product.name}
                        className="img-fluid rounded-0"
                        style={{ transition: 'transform 0.5s ease', height: '200px', objectFit: 'cover', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                        variant="top" src={product.imageUrl} />
                    </div>
                    <Card.Body className='d-flex justify-content-between'>
                      <p>₹{product.price}</p>
                      <Button variant="primary" onClick={cartCtx.addItem.bind(null, newProduct)}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
        </div>
        <hr/>
          
        <div className="text-center p-3">
          <a className="bg-secondary" type='button' style={{ color: "#fff", textAlign: "center", padding: "9px", borderRadius: "9px", textDecoration: "none" }} onClick={props.onShow}>See the Card</a>
        </div>
      </div>
    </>
  )
}

export default Body;








