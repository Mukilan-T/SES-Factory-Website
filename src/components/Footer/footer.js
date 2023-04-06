import React from 'react'
import {Row,Col} from 'react-bootstrap'
import style from '../../assets/Styles/Home/con4.module.css'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
   <div className={style.f}>  
   <br></br>  
   <Row>
    <Col md={2}>
    </Col>
    <Col md={3}>
    <h3>Quick Contact</h3>
    <p>Sri Elumalaiyan Sago Factory</p>
    <p> Mr R Balakrishnan</p>
    <p> Sri Elumalaiyan Sago Factory, Attur, Salem, Tamil Nadu - 636101, India</p>
    <p>+91-8610126966</p>
    <p>srielumalaiyansago@gmail.com
    </p>
    </Col>
    <Col md={1}>
    </Col>
    <Col md={2}>
    <h3>General Links</h3>
    <NavLink>Home</NavLink>
    <NavLink>Products</NavLink>
    <NavLink>Contact Us</NavLink>
    <NavLink>About Us</NavLink>
    <NavLink>Testimonilas</NavLink>
    <NavLink>Site Map</NavLink>
    </Col>

    <Col md={1}>
    </Col>

    <Col md={3}>
    <h3>Products</h3>
    <NavLink>Sago Seeds</NavLink>
    <NavLink>Tapioca Starch</NavLink>
    </Col>

    <Col md={2}>
    </Col>

    </Row>
    </div>

  )
}
