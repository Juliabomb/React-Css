import React, { useState }  from 'react';
import { useEffect } from 'react';
import {Container, Button, Row, Col, Form } from 'react-bootstrap';

const AddrItem = (props) => {
    return (
        <p>{props.value} ( {props.item.data.geo_lat} / {props.item.data.geo_lon})</p>
    )
}
export default AddrItem;