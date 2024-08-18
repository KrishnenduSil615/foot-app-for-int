import React from 'react'
import NavBarComponent from './NavBarComponent'
import { useLocation } from 'react-router-dom'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Button } from 'react-bootstrap';

import BackGroundImage from './img/background-1.avif'

// import Header from './Header';

const style = `
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  80% {
    transform: translate(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
`;
function Header(props) {
  const location = useLocation()
  return (

    <div >
      <NavBarComponent onShow={props.onShow} />

      {location.pathname === '/home' &&
        <div class=""
        style={{ 
          height: "100vh", 
          position: "relative", 
          background: `url(${BackGroundImage}) top/cover no-repeat`, 
          // marginTop: "-10px", 
          overflow: "hidden",
          backgroundSize: 'cover',
          backgroundPosition: "top",
          backgroundColor: '#000000',
          // borderBottomRightRadius:"10rem",
          // borderBottomLeftRadius:"10rem"
          // marginTop:'10px',
          // position:"fixed",
        }}
      >
        {/* <Header /> */}
        <style>{style}</style>
        <h1 
          style={{  
            marginTop: '12rem',
            fontSize: '8vw',
            color: 'ButtonHighlight',
            padding: '1rem',
            textAlign: 'center',
            textShadow: '2px 30px 18px rgba(0, 0, 0, 0.9)',
            textTransform: 'uppercase',
            letterSpacing: '0.5rem',
            fontWeight: 'bold',
            animationName: 'moveInRight',
            animationDuration: '3s',
            animationDelay: '0.5s',
            animationTimingFunction: 'ease-out',
          }}
        >
          WELCOME TO OUR KITCHEN
        </h1>
      </div>}
    </div>

  )
}

export default Header;

