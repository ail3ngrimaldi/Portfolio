import React from 'react';
import style from '../styles/Nav.css';
import  'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';


export default function NavBar(){
    return (
        <div>
            <nav className='prueba' style={style} />
            This is a trial NavBar
            <nav/>
            <Button>Click me!</Button>
        </div>
    );
}