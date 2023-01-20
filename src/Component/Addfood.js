import React from 'react'
import { useState } from 'react'
import { addfoodRoute } from '../utils/APIRoutes'
import axios from 'axios'
import { useContext } from 'react'
import foodContext from './context/foods/foodContext'
import { useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
export default function Addfood() {
  
  const navigate=useNavigate();
  // const {socket}=useContext(foodContext);
  const [food,setFood]=useState({foodname:"",foodprice:"",foodimg:""})

  useEffect(()=>{
    if(localStorage.getItem("employee")){
         navigate("/addfood");
    }else{navigate("/")}

  },[])
  
const name=(e)=>{
  setFood({...food,foodname:e.target.value})
}
const price=(e)=>{
  setFood({...food,foodprice:e.target.value})
}
const img=(e)=>{
  setFood({...food,foodimg:e.target.files[0]})
}
const handleSubmit=(e)=>{
  e.preventDefault();

  const url=addfoodRoute;
        const formDate=new FormData();
        formDate.append("foodimg",food.foodimg)
        formDate.append("foodname",food.foodname.toLowerCase());
        formDate.append("foodprice",food.foodprice);
      let response= axios.post(url,formDate).then((res)=>{
          setFood({foodname:"",foodprice:""})
        }).catch((err)=>{
          console.log(err);
          alert("Internal server error")
        })
        // showAllFoods();
      //  socket.current.emit("send-order",response);
    }

  return (
    <div className="container">
        <h2 className='my-3'>Add New Food</h2>
    <form className='my-3' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Dish Name</label>
    <input min={3} value={food.foodname} required onChange={name}type="text" className="form-control" id="dishname" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Prize</label>
    <input onChange={price} value={food.foodprice} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">food image</label>
    <input min={1} required onChange={img}type="file" className="form-control" id="file"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 <button style={{position:"relative",left:"90px",top:'-50px',backgroundColor:"blue",border:"1px solid black",borderRadius:"5px",padding:"2px 8px"}}><Link style={{textDecoration:"none",fontSize:"20px",color:"white"}} to="/stockissue">stockissue</Link></button>
    </div>
  )
}
