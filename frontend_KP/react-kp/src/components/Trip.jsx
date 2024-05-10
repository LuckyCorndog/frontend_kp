import { useEffect, useState } from 'react';
import TripData from './TripData';
import './styleTrip.css'

function Trip(){

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8081/travel_blogs')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
      
    return(
        <div className='trip'>
            <div className='tripcard'>
                {data.map((item,i)=>(
                    <tr key={i}>
                        <TripData i={i} img={item.image} head={item.title} name={item.user_name} text={item.body}/>
                    </tr>  
                ))}
            </div>
        </div>
    )
}

export default Trip;