import React from 'react';
import './Count.css'

const Count = (props) => {
    // console.log(props.time)
    // let time = 0;
    // for(time of props.cart){
    //     time = time + time.time
    // }


    const fun1 = () => {
        // const value = 10;
        // return value;
        console.log('connected')

        const one1 = document.getElementById('one').innerText = 10
    }

    const fun2 =() => {
        document.getElementById('one').innerText = 20
    }

    const fun3 = () => {
        document.getElementById('one').innerText = 30
    }

    const fun4 = () => {
        document.getElementById('one').innerText = 40
    }
    
    
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
                    <button onClick={()=>fun1()} className="button-1">10s</button>
                    <button onClick={() =>fun2()} className="button-2">20s</button>

                    <button onClick={() => fun3()} className="button-3">30s</button>
                    <button onClick={() => fun4()} className="button-4">40s</button>

                </div>
            </div>

            <div className="exercide-details">
                <h2>Exercise Details</h2>
                <div className="e-time">
                <h3>Exercise Time</h3>
                <p>{props.count} Minute</p>
                </div>
                <div className="b-time">
                <h3>Break Time</h3>
                <p id='one'> </p>
                </div>
            </div>

                <button className='complete'><h3>Activity Completed</h3></button>
        </div>
    );
};

export default Count;