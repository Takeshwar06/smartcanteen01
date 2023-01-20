import React from 'react'
import { useContext } from 'react';
import foodContext from './context/foods/foodContext';

export default function CircleFood({food}) {
    const{paymentProcess}=useContext(foodContext);
    const conformation=async(food)=>{
        let foodcount=prompt(`${food.foodprice}.Rs how many you want ${food.foodname}`);
      
        if(!isNaN(foodcount)){
          // fetch api to add order   {to do something in food obj}
          if(Number(foodcount)!==0){
            // razorpay coming soon
            paymentProcess(food,foodcount);
           localStorage.setItem("setOneFoodForOrder",JSON.stringify({food,foodcount}));
        }
        }
        else{
          alert("Quantity should be number form");
        }
       }
    return (

        <div  id={`food-1 ${food._id}`} className="food" onClick={()=>{conformation(food)}}>
            <img src={`/upload/${food.foodimg}`} alt="" srcSet="" />
            <div className="label">
                <label style={{textAlign:"center"}}>{food.foodname}</label>
            </div>
        </div>

    )
}
