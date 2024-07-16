import { Outlet, Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    let navigate = useNavigate()
    function LogOut() {
        localStorage.clear();
        navigate("/register")
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" href="/">E-comma</div>
                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Link className="nav-link" to="/add">Add Product</Link>
                                        {/* <Link className="nav-link" to="/update">Update Products</Link> */}
                                        <Link className="nav-link" to="/products">Product</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="nav-link" to="/login">Login</Link>
                                        <Link className="nav-link" to="/register">Register</Link>

                                    </>
                            }


                        </div>
                    </div>
                </div>
                {
                    localStorage.getItem("user-info")?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                }
            </nav>

            <Outlet />

        </>

    )
}
export default Header;