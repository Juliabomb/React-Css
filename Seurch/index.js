import React, { useState }  from 'react';
import { useEffect } from 'react';
// import Item from '../Item'
import { Form, Button } from 'react-bootstrap';
// import Seurch from '../Seurch'


 const HOC = (Seurch) => { 
   
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

    return (
        <div>

<nav class="navbar navbar-expand-sm bg-light navbar-dark">
  
  <Form.Control onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder="Введите"/>
  <br/>
    
    {
    addrList.map((item)=>{
    return (<Seurch value={item.value} item={item} />)
    })
    }






 <Button class="btn btn-info" > Поиск</Button> 
  
</nav>



        </div>
    )
};

export default HOC;

 