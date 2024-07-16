import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
function ViewDetail() {

    let { id } = useParams();
    console.log(id)
    const [data, setData] = useState("")
    async function View() {
        let result = await fetch(`http://localhost:8000/api/product/${id}`);
        result = await result.json();
        setData(result);
    }
    console.log(data);
    useEffect(() => {
        View();
    })
    return (
        <>   
            <Header/>
            <div className="container">
                <h1 className="mt-4 mb-3">{data.name}</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img" alt="sithutun" src={"http://localhost:8000/" + data.file_path} />
                    </div>
                    <div className="col-lg-6">
                        <h3>Description of product</h3>
                        <p>{data.description}</p>
                        <h4>Price:{data.price}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewDetail;