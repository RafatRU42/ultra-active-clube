import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'
import '../../activity.json'
import Count from '../Count/Count';
import '../../profile.jpg'

const Main = () => {

    const [activity, setActivity] = useState([]);
    console.log(activity)
    useEffect(() =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])
    return (
        <div className='main'>
            <div className='active'>
                <h1>Select Today's Time Duration of Studies</h1>
                <div className='activity'>
                {
                    activity.map(activity => <Activity name = {activity}></Activity>)
                }
                </div>

                <h2>1.How does react work?</h2>
                <h3 style={{color: 'blue'}}>Ans.</h3>
                <h2>2. What is the difference between props and state?</h2>
                <h3 style={{color: 'blue'}}>Ans.</h3>
                <h2>3. Why we use useEffect without load data?</h2>
                <h3 style={{color: 'blue'}}>Ans.</h3>
            </div>
            <div className="count">
                <Count image = {'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}></Count>
            </div>
        </div>
    );
};

export default Main;