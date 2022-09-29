import React from 'react';
import './Actitity.css'

const Activity = (props) => {
     const {name, image, time, id, paragraph} = props.name;

    return (
        <div className='active'>
           <img src={image} alt="" />
           <p>Name: {name}</p>
           <p>{paragraph}</p>
           <p>Time: {time}</p>
           <button className='button'><h3>Add To List</h3></button>
        </div>
    );
};

export default Activity;