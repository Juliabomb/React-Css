import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';

import HOC from '../Seurch';

 function Indexx (props){

    const Seurch = HOC(Indexx);
    
    return (
        <div class="jumbotron item" >
<p class = 'text-center lead'>

    {props.value} 

</p>

{/* ( {props.item.data.geo_lat} / {props.item.data.geo_lon}) */}
        </div>
    )
}



// export default Seurch;

export default Indexx;