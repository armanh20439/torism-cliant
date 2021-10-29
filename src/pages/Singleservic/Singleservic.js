import React from 'react';
import './Singleservic.css'

const Singleservic = ({user}) => {
    const {_id,name,description,img,}=user;
    return (
        <div className="col-lg-4 col-md-6  ">
    <div className=" card  item ">
      <img className=' p-3 card-img ' src={img}  alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
      
        <p className="card-text">{description}</p>
       {/* <Link to={`/details/${id}`}>
       <button className='btn '>Details</button>
       </Link> */}
      </div>
    </div>
  </div>
    );
};

export default Singleservic;