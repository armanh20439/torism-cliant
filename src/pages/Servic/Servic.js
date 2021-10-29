import React, { useEffect, useState } from 'react';
import Singleservic from '../Singleservic/Singleservic';

const Servic = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://shielded-coast-32872.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
         <div className='row'>
             {
                 users.map(user=><Singleservic user={user}
                    key={user._id}
                 ></Singleservic>)
             }
         </div>
        </div>
    );
};

export default Servic;