import { useState } from 'react';
import './styleTrip.css'

function TripData(props){

    const[selected, setSelected] = useState(null);

    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return(
        <div className='t-card' onClick={() => toggle(props.i)}>
            <div className='t-image'>
                <img src={props.img} alt='image'/>
            </div>
            <h4>{props.head}</h4>
            <p className='author'>Author: {props.name}</p>
            <p className={selected === props.i ? 'show' : 'hide'}>{props.text}</p>
        </div>
    )
}

export default TripData;