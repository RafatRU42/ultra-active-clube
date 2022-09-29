import React from 'react';
import './Actitity.css'

const Activity = (props) => {
    // console.log(props.name)
     const {name, image, time, paragraph} = props.name;
     const {evenHandeler} = props

    return (
        <div className='active'>
           <img src={image} alt="" />
           <h3>Name: {name}</h3>
           <p>{paragraph}</p>
           <p className='time'>Time: {time}</p>
           <button onClick={()=>evenHandeler(props.name)} className='button'><h3>Add To List</h3></button>
        </div>
    );
};

export default Activity;