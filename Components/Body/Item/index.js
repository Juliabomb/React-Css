import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';


export default function Index (props){


    return (
        <div class="jumbotron item" >
<p class = 'text-center lead'>{props.value} Item</p>

{/* ( {props.item.data.geo_lat} / {props.item.data.geo_lon}) */}
        </div>
    )
}
