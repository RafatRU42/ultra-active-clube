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

                <h2>How does react work?</h2>
            </div>
            <div className="count">
                <Count></Count>
            </div>
        </div>
    );
};

export default Main;