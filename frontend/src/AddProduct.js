import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    let navigate=useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [result,setResult]=useState("");
    async function add(){
        const formData=new FormData();
        formData.append('name',name);
        formData.append('price',price);
        formData.append('file',file);
        formData.append('description',description);
        let results=await fetch("http://localhost:8000/api/product",{
            method:"POST",
            body:formData,
        })
        console.log(formData);
        results=await results.json();
        if(results.status==="error"){
            setResult(results);
        }
        if(results.success){
            console.log(results);
            alert("Data has been save")
            navigate("/products")
        }
        
    }
    console.log(result);
    return (
        <>
            <Header />
            <div className="product">
                {
                    result.status === "error" ? <div class="alert alert-warning" role="alert">
                        {result.error[0]}
                    </div> :
                        <div></div>
                }

                <div className="my-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name" 
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                        
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="price"
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e)=>{setFile(e.target.files[0])}}

                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control" 
                        placeholder="description"
                        onChange={(e)=>{setDescription(e.target.value)}} 
                        />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={add}>Add Product</button>
                </div>
            </div>
        </>
    )
}
export default AddProduct;