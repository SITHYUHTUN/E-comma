
import { Link ,useNavigate} from "react-router-dom";
function ProductCard(props) {
    let navigate=useNavigate();
    let { products } = props


    async function destroy($id) {
        
        let result = await fetch("http://localhost:8000/api/delete/" + $id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.log(result);
        alert(result.result);
        navigate('/products')
        
    }



    return (
        <>
            <div className="card ">
                <div className="card-img">
                    <img src={"http://localhost:8000/" + products.file_path} className="card-img-top img-fluid" alt="si thu tun" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text">{products.description}</p>
                    <p><strong>Price : {products.price}</strong></p>
                    <div className="btn-toolbar d-flex justify-content-between" role="toolbar">
                        <div className="btn-gorup mb-3">
                            <button onClick={() => { destroy(products.id) }} className="btn btn-danger">Delete</button>
                        </div>
                        <div className="btn-gorup mb-3">
                            <Link to={"update/" + products.id} className="btn btn-primary">Update</Link>
                        </div>
                    </div>
                    <Link to={"product/" + products.id} className="btn btn-primary form-control">View Detail</Link>
                </div>
            </div>
        </>
    )
}
export default ProductCard;