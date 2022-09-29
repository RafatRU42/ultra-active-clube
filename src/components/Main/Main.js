import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'
import '../../activity.json'
import Count from '../Count/Count';
import '../../profile.jpg'

const Main = () => {

    const [activity, setActivity] = useState([]);
    // console.log(activity)

    const [count, setCount] = useState([])
    useEffect(() =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])

   const addToList = (activity) =>{
    console.log(activity.time);
    const newCount = [...count, activity];
    setCount(activity.time);
   }

    return (
        <div className='main'>
            <div className='active'>
                <h1>Select Today's Time Duration of Studies</h1>
                <div className='activity'>
                {
                    activity.map(activity => <Activity name = {activity} key = {activity.id}  evenHandeler = {addToList}></Activity>)
                }
                </div>

                <h2>1.How does react work?</h2>
                <h3 style={{color: 'blue'}}>Ans. React is devided into two major APIs.First one is the react DOM. This is the API that used to perform the actual renduring on a webpage. Second one is the react componenet API. These are the parts of the page that are actually rendered by react DOM.</h3>

                <h2>2. What is the difference between props and state?</h2>
                <h3 style={{color: 'blue'}}>Ans. Props are the read only components. It is an object which store value of attribute of a tag.and work similar to the HTML attribute. It allows passing data from one component to another component. On the other hand State is an updatable stracture that is used to contain data or information about the component and can change over time.</h3>
                <h2>3. Why we use useEffect without the perpose of loading data?</h2>
                <h3 style={{color: 'blue'}}>Ans. UseEffect use for many objective such as manipulating DOM Directly, Using timer functions like setTimeout, fetch request and more </h3>
            </div>
            <div className="count">
                <Count count = {count} image = {'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}></Count>
            </div>
        </div>
    );
};

export default Main;