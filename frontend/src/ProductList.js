import Header from "./Header";
import React from "react";
import { useState,useEffect } from "react";
import ProductCard from "./ProductComponent";
function ProductList(){

    const [data,setData]=useState([])
    useEffect(()=>{
        datalist();
        
    },[data])
    async function datalist(){
        let result=await fetch("http://localhost:8000/api/list");
        result =await result.json();
        setData(result);
    }
    console.log(data)
    return(
        <>
        <Header/>
        <div className="container">
        <div className="row my-5">
        {
            data.length > 0 ?
            data.map(product=>(
                <div className="col col-md-3">
                    <ProductCard products={product}/>
                </div>
            ))
            :<h4>No product Available</h4>
        }
        </div>
        </div>
        </>
    )
}
export default ProductList;