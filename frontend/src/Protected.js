import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Protected(props){
    let navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate("/register")
        }
            

    },[navigate])
    let Cmp=props.cmp
return (
    <div>
       <Cmp/>
    </div>
)
}
export default Protected;