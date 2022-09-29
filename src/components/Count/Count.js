import React from 'react';
import './Count.css'

const Count = (props) => {
    return (
        <div className='count'>
            
            <img src={props.image} alt="" />
            <h2 className='name'>Ruhul Muazzam Rafat</h2>
            <p className='address'>University of Rajshahi, Bangladesh</p>

            <div className='info'>
                <div className="new">
                <h2 className='weight'>Weight </h2>
                <p className='para'>60kg</p>
                </div>
                <div className="">
                <h2 className='height'>Height</h2>
                <p className='hei'>5"4'</p>
                </div>
                <div className="">
                <h2 className='age'>age</h2>
                <p className='a'>22</p>
                </div>
            </div>
            <div className="break">
                <h2>Add a break</h2>
                <div className="butto">
                    <button className="button-1">10s</button>
                    <button className="button-2">20s</button>
                    <button className="button-3">30s</button>
                    <button className="button-4">40s</button>

                </div>
            </div>
        </div>
    );
};

export default Count;