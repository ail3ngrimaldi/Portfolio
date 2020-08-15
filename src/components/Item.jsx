import React from 'react';
import '../styles/style.css';

export default function Item(props) {
    return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> {props.price}
    </div>;
  }