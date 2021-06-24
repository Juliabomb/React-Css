import React, { useState }  from 'react';
import { useEffect } from 'react';
import {Container, Button, Row, Col, Form } from 'react-bootstrap';
import AddrItem from '../addrItem'
// import My from './components/My'

const Address = () => {
    const [query,setQuery] = useState('')
    const [addrList,setAddrList] = useState([])

    useEffect(() => {
        //console.log('useEffect([query]', query)

        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        let token = "e67c041c0cc53924f46f59e2a3cf2c30379a56ed";
        
        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }
        
        fetch(url, options)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setAddrList(result.suggestions)
        })
        .catch(error => console.log("error", error));

    },[query])

    // const getAddrList = ()=>{
    //     console.log('getAddrList')
    //     return addrList.map((item)=>{
    //         return (<AddrItem value={item.value} />)
    //     })
    // }


    return (
        <>
            <Form.Control onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder="Enter address" />
            <br/>
            {//getAddrList()
            }

            {
                addrList.map((item)=>{
                    return (<AddrItem value={item.value} item={item} />)
                })
            }
        </>
    )
}

export default Address;