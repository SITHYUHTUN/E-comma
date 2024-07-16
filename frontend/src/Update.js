// import Header from "./Header";
// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";
// function Update() {
//     let {id}=useParams();
//     const [data,setData]=useState("")
//     useEffect(()=>{
//         async function getUpdate(){
//             let result=await fetch(`http://localhost:8000/api/product/${id}`);
//             result=await result.json();
//             setData(result);
//         }
//         getUpdate();

//     },[id])
//     const[name,setName]=useState("");
//     const[price,setPrice]=useState("");
//     const[file,setFile]=useState("");
//     const[description,setDescription]=useState("")

//     async function setUpdate(){
//           let formData=new FormData();
//           formData.append('name',name);
//           formData.append('price',price);
//           formData.append('description',description);
//           formData.append('file_path',file);
//           await fetch(`http://localhost:8000/api/update/${id}`,{
//             method:"POST",
//             body:formData
//           });
//           alert("Data has been save")



//     }

//     return (
//         <>
//             <Header />
//             <div className="update">
//                 <div className="my-3 mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={data.name}
//                         onChange={(e)=>{setName(e.target.value)}}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={data.price}
//                         onChange={(e)=>{setPrice(e.target.value)}}
//                     />
//                 </div>
//                 <div className="mb-3"> 
//                     <textarea
//                     className="form-control"
//                     value={data.description}
//                     onChange={(e)=>{setDescription(e.target.value)}}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input
//                         type="file"
//                         className="form-control"
//                         onChange={(e)=>{setFile(e.target.files[0])}}

//                     />
//                 </div>
//                 <div className=" mb-3"><button onClick={setUpdate} className="btn btn-primary">Add product</button></div>
//                 <div>
//                      <img style={{width:500}} alt="hello" src={"http://localhost:8000/" + data.file_path}/>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Update;

// import Header from "./Header";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Update() {
//     let { id } = useParams();
//     const [data, setData] = useState({});
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [file, setFile] = useState(null);
//     const [description, setDescription] = useState("");

//     useEffect(() => {
//         async function getUpdate() {
//             let result = await fetch(`http://localhost:8000/api/product/${id}`);
//             result = await result.json();
//             setData(result);
//             setName(result.name);
//             setPrice(result.price);
//             setDescription(result.description);
//         }
//         getUpdate();
//     }, [id]);

//     async function setUpdate() {
//         let formData = new FormData();
//         formData.append('name', name);
//         formData.append('price', price);
//         formData.append('description', description);
//         formData.append('file_path', file);
//         await fetch("http://localhost:8000/api/update/"+id, {
//             method: "POST",
//             body: formData
//         });
//         alert("Data has been saved");
//     }

//     return (
//         <>
//             <Header />
//             <div className="update">
//                 <div className="my-3 mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <textarea
//                         className="form-control"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => setFile(e.target.files[0])}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <button onClick={setUpdate} className="btn btn-primary">Update Product</button>
//                 </div>
//                 <div>
//                     <img style={{ width: 500 }} alt="product" src={`http://localhost:8000/${data.file_path}`} />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Update;

import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"; 
function Update() {
    let navigate=useNavigate();
    let { id } = useParams();
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function getUpdate() {
            try {
                let response = await fetch(`http://localhost:8000/api/product/${id}`);
                let result = await response.json();
                setData(result);
                setName(result.name);
                setPrice(result.price);
                setDescription(result.description);
            } catch (error) {
                console.error("Error fetching the product data:", error);
            }
        }
        getUpdate();
    }, [id]);

    async function setUpdate() {
        const formData=new FormData();
        formData.append('name',name);
        formData.append('price',price);
        formData.append('file',file);
        formData.append('description',description);
        let result=await fetch(`http://localhost:8000/api/update/${id}`,{
            method:"POST",
            body:formData,
        })
        result=await result.json(result)
        console.log(result);
        if(result.status==="error"){
            setData(result);
        }
        if(result.success){
            console.log(result);
            alert("Data has been save")
            navigate("/products")
        }

        

            
    }

    return (
        <>
            <Header />
            <div className="update">
                <div className="my-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="file"
                        
                        className="form-control"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <button onClick={setUpdate} className="btn btn-primary">Update Product</button>
                </div>
                <div>
                    {data.file_path && (
                        <img style={{ width: 500 }} alt="product" src={`http://localhost:8000/${data.file_path}`} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Update;
